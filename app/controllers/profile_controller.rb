class ProfileController < ApplicationController
  
  def connect_github
    User.fetch_repo(@omniauth_response.info.nickname, user.id)
  end

  def connect_linkedin

  end
end
