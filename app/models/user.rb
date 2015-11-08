class User < ActiveRecord::Base
  has_many :repos
  has_many :basic_profiles
  has_many :positions
  has_many :linkedin_oauth_settings

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.profile_url = auth.info.image
      user.first_name = auth.info.name
      user.email = auth.info.email
      user.oauth_token = auth.credentials.token
      user.save!
      if user.provider == 'linkedin'
        user.linkedin_oauth_settings.create(token: auth.credentials.token, secret: auth.credentials.token)
        binding.pry
      elsif user.provider == 'github'

      else

      end
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
end
