class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]
    def create
        @user = User.find_by_credentials(params[:email], params[:password])
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: {errors: ["Invalid Credentials"]}, status: 422
        end
    end

    def destroy
        logout! if logged_in?
        head :no_content #response will have no body
    end

    def show
        render json: {user: current_user}
    end
end