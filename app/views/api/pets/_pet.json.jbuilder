json.extract! pet, :id, :name, :species, :bio, :birthdate, :owner_id
json.owner do
    json.extract! pet.owner, :id, :fname, :lname, :email
end
json.photo_url pet.photo.url