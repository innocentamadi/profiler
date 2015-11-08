class LinkedinController < ApplicationController
  before_action :authenticate_user, only: :connect

  before_action do
    set_linkedin_client
  end

  def connect
    linkedin_oauth_setting = LinkedinOauthSetting.find_by_user_id(current_user.id)
    if linkedin_oauth_setting
      token = linkedin_oauth_setting.token
      secret = linkedin_oauth_setting.secret
      # @client.authorize_from_access(token, secret)
      create_profile
    else
      authorize_with_linkedin
    end
  end

  def migrate
    pin = params[:oauth_verifier]
    if pin
      request_token = session[:rtoken]
      request_token_secret = session[:rsecret]
      access_token, access_token_secret = @client.authorize_from_request(request_token, request_token_secret, pin)
      LinkedinOauthSetting.create!(token: access_token, secret: access_token_secret, user: current_user)
      create_profile
    end
  end

  private

    def create_profile
      binding.pry
      profile = @client.profile(fields: ["first-name", "last-name", "maiden-name", "formatted-name" ,:headline, :location, :industry, :summary, :specialties, :positions, "picture-url", "public-profile-url"])
      basic_profile = profile.to_hash.reject{|key| key.to_s =~ /positions/}
      basic_profile[:user] = current_user
      basic_profile[:location] = basic_profile["location"]["name"]
      basic_profile = BasicProfile.create(basic_profile)
      create_positions(profile.positions.all)
      redirect_to '/profile'
    end

    def create_positions(positions)
      positions.each{ |p|
        user_position = {
          title: p.title,
          summary: p.summary,
          start_date: Date.parse("1/#{p.start_date.month ? p.start_date.month : 1}/#{p.start_date.year}"),
          is_current: p.is_current,
          company: p.company.name,
          user: current_user
        }
        user_position[:end_date] = Date.parse("1/#{p.end_date.month ? p.end_date.month : 1}/#{p.end_date.year}") unless p.is_current
        Position.create(user_position)
      }
      redirect_to root_url
    end

    def authorize_with_linkedin
        request_token = @client.request_token(config)
        session[:rtoken] = request_token.token
        session[:rsecret] = request_token.secret
        redirect_to request_token.authorize_url
    end

    def set_linkedin_client
      @client = LinkedIn::Client.new
    end

    def config
      {
          api_host: 'https://api.linkedin.com',
          authorize_path: '/uas/oauth/authenticate',
          request_token_path: '/uas/oauth/requestToken?scope=r_basicprofile',
          access_token_path: '/uas/oauth/accessToken',
          oauth_callback: "http://#{request.host}:#{request.port}/linkedin/migrate"
      }
    end
end
