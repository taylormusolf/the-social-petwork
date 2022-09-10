json.pets do
    @pets.each do |pet|
        json.set! pet.id do
            json.partial! 'pet', pet: pet
        end
    end
end
