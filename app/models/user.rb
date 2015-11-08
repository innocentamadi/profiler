class User < ActiveRecord::Base

  has_many :repos

  validates_presence_of :username, :email, :password_digest, unless: :guest?
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

  def self.fetch_repo(github_username, user_id)
    @repos = []
    github = Github.new
    @response = github.repos.list user: github_username
    @response.each do |repo|
      @repos << Repo.new(name: repo.name, description: repo.description, user_id: user_id)
    end

    Repo.import @repos
  end

   def fullname
     ("#{first_name}" ' ' "#{last_name}".capitalize if first_name && last_name.present?) || ("Guest".capitalize if guest) || ""
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
