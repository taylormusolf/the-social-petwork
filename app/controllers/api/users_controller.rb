class Api::UsersController < ApplicationController

  wrap_paramenters include: User.attribute_name ['password'] #will wrap a non-existing columns as well

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save # do NOT use save! here
      login!(@user) # defined in ApplicationController
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    user = current_user
    
  end

  private
  def user_params
    params.require(:user).permit(:email, :password) #could add password_confirmation
    # {user: {email: , password: }}
    #({username: 'bob', password: 'password'}) also works now with auto wrapping

  end
end