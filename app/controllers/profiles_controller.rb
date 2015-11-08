class ProfilesController < ApplicationController
  def show
    id = params[:id] || session[:user_id]
    @user = User.find(id)
    @basic_profile = @user.basic_profile
    @positions = @user.positions.decorate
    @repos = @user.repos
  end
end
