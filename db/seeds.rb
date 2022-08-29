# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Pet.destroy_all
User.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('pets')


owner1 = User.create!(fname: "Taylor", lname: "Musolf", email: "taylor@taylor.com", password: "123456")


pet1 = Pet.create!(name: "Leo", owner_id: owner1.id, species: "dog", bio: "The fluffiest dog around", birthdate: "12/13/2016")