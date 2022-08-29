class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def create
    user = User.new(user_params)
    if user.save # do NOT use save! here
      login!(user) # defined in ApplicationController
      
    else
      #errors
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end