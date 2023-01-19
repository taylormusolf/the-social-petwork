json.pets do
    @pets.each do |pet|
        json.set! pet.id do
            json.partial! 'pet', pet: pet
        end
    end
end

# json.likes do
#     @pets.each do |pet|
#         pet.likes.each do |like|
#             json.set! pet.id do
#                 json.id like.id
#             end
#         end
#     end
# end
