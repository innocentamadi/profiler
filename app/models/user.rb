class User < ActiveRecord::Base
  has_many :repos

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
end
