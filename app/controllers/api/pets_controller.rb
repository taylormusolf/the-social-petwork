class Api::PetsController < ApplicationController
  
  wrap_parameters include: Pet.attribute_names + ['ownerId'] #will wrap a non-existing columns as well

  before_action :require_logged_in, only: [:create, :update, :destroy]
  def index
    if params[:owner_id]
      @pets = Pet.where(owner_id: params[:owner_id]).includes(:owner).with_attached_photo
      render :index
    else
      @pets = Pet.all.includes(:owner).with_attached_photo
      render :index
    end
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

  def update
    @pet = Pet.find_by(id: params[:id])
    if @pet &.update(pet_params)
      render :show
    else
      render json: @pet.errors.full_messages, status: 422
    end
  end

  def destroy
    @pet = Pet.find_by(id: params[:id])
    if @pet &.destroy
      #redirect
      head :no_content
    else
      render json: @pet.errors.full_messages, status: 422
    end
  end


  private
  def pet_params
    params.require(:pet).permit(:name, :species, :bio, :birthdate, :owner_id)
  end

end