class SessionsController < ApplicationController
  respond_to :js, :html

  def create
    @omniauth_response = env['omniauth.auth']
    user = current_user || User.from_omniauth(@omniauth_response)
    user_id = user.id
    User.fetch_repo(@omniauth_response.info.nickname, user_id) if @omniauth_response.provider == 'github'
    user.create_linkedin_profile(@omniauth_response.credentials) if @omniauth_response.provider == 'linkedin' && user.basic_profile.nil?

    login_user(user)
    if env['omniauth.origin'].nil?
      redirect_to root_url
    else
      redirect_to env['omniauth.origin']
    end
  end

  def destroy
    session[:user_id] = nil
    session[:url] = nil
    redirect_to root_url
  end
end
