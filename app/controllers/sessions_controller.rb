class SessionsController < ApplicationController
  respond_to :js, :html

  def create
    @omniauth_response = env['omniauth.auth']
<<<<<<< HEAD
    user = User.from_omniauth(@omniauth_response)
    user_id = user.id
    User.fetch_repo(@omniauth_response.info.nickname, user_id) if @omniauth_response.provider == 'github'
=======
    user = current_user || User.from_omniauth(@omniauth_response)
    user.fetch_repo(@omniauth_response.info.nickname) if @omniauth_response.provider == 'github'
>>>>>>> 4e7f87c193550794535628a2c1582a79ca2410cd
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
