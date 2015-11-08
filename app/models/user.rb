class User < ActiveRecord::Base
  serialize :languages, Array
  has_many :repos, dependent: :destroy
  has_one :basic_profile, dependent: :destroy
  has_many :positions, dependent: :destroy
  has_many :linkedin_oauths, dependent: :destroy

  # validates_presence_of :email, :password_digest, unless: :guest?
  # validates_uniqueness_of :username, allow_blank: true
  # validates_confirmation_of :password


  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.profile_url = auth.info.image
      user.first_name = auth.info.name
      user.email = auth.info.email
      user.oauth_token = auth.credentials.token
      user.save!
    end
  end

  def fetch_repo(github_username)
    @repos = []
    github = Github.new
    lang = []
    @response = github.repos.list user: github_username
    @response.each do |repo|
      @repos << Repo.new(name: repo.name, description: repo.description, url: repo.html_url, forks_url: repo.forks_url, user: self, language: repo.language)
      lang << repo.language if repo.language
    end
    self.languages = lang.uniq
    self.save

    Repo.import @repos
  end

  def create_linkedin_profile(credentials)
    access= self.linkedin_oauths.first_or_create(token: credentials.token, secret: credentials.secret)
    @client = LinkedIn::Client.new
    @client.authorize_from_access(access.token, access.secret)
    profile = @client.profile( fields:
        ["first-name", "last-name", "maiden-name",
        "formatted-name" ,:headline, :location, :industry, :summary,
        :specialties, :positions, "picture-url", "public-profile-url"]
    )
    create_basic_profile(profile)
  end

  def create_basic_profile(profile)
    basic_profile = profile.to_hash.reject{|key| key.to_s =~ /positions/}
    basic_profile[:user] = self
    basic_profile[:location] = basic_profile["location"]["name"]
    basic_profile = BasicProfile.create(basic_profile)
    create_positions(profile.positions.all)
  end

  def create_positions(positions)
    all_positions = []
    positions.each{ |p|
        user_position = {
          title: p.title,
          summary: p.summary,
          start_date: Date.parse("1/#{p.start_date.month ? p.start_date.month : 1}/#{p.start_date.year}"),
          is_current: p.is_current,
          company: p.company.name
        }
        user_position[:end_date] = Date.parse("1/#{p.end_date.month ? p.end_date.month : 1}/#{p.end_date.year}") unless p.is_current
        all_positions << self.positions.new(user_position)
      }
      Position.import(all_positions)
  end
   def fullname
     ("#{first_name}" ' ' "#{last_name}".capitalize if first_name && last_name.present?) || ("Guest".capitalize if guest) || "Type your full name here"
   end

    def self.new_guest
      new { |u| u.guest = true }
    end

    def name
      guest ? "Guest" : first_name
    end

    def assign_other_guest_records_to(user)
      repos.update_all(user_id: user.id)
    end
end
