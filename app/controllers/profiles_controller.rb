class ProfilesController < ApplicationController
  def show
    id = params[:id] || session[:user_id]
    @user = User.find(id)
    @basic_profile = @user.basic_profile
<<<<<<< HEAD
    @positions = @user.positions
=======
    @positions = @user.positions.decorate
>>>>>>> 4e7f87c193550794535628a2c1582a79ca2410cd
    @repos = @user.repos
  end
end
