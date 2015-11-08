class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = params[:user] ? User.new(params[:user]) : User.new_guest
    if @user.save
      current_user.assign_other_guest_records_to(@user) if current_user && current_user.guest?
      login_user(@user)
      redirect_to user_path(@user)
    else
      flash[:error] = "Could not create account. Please try again."
      redirect_to root_url
    end
  end

  def show
    @user = current_user || params[:user]
    redirect_to root_url if !@user
  end

  def edit_user
    @option = params[:option]
    respond_to do |format|
      format.js { render "show_edit_box.js" }
    end if @option
  end

  def update_user
    @option = (user_params && user_params[:option]) ? user_params[:option] : nil
    update_user_info if @option
    respond_to do |format|
      format.js { render "update_user.js" }
    end
  end


  private


  def user_params
    # pry.binding
    params.require(:user).permit(:avatar, :username, :gender, :first_name, :middle_name, :last_name, :bio, :username, :email, :password, :password_confirmation, :option, :fullname) if params.has_key? "user"
  end

  def update_user_info
    if @option == "fullname"
      user_fullname
    else
      @current_user[@option] = user_params[@option]
    end
    @current_user.save
  end

  def user_fullname
    fullname = user_params[@option].split(" ")
    @current_user.first_name = fullname[0]
    @current_user.last_name = fullname[1]
  end

end
