class Api::PetsController < ApplicationController
  
  def index
    @pets = Pet.all
    render :index
  end

  def show
    @pet = Pet.find_by(id: params[:id])
    render :show
  end

  def create
    @pet = Pet.new(pet_params)
    if @pet.save
      render :show
    else
      render json: @pet.errors.full_messages, status: 422
    end
  end


  private
  def pet_params
    params.require(:pet).permit(:name, :species, :bio, :birthdate)
  end

end