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

p 'Seeding Users...'
owner1 = User.create!(fname: "De", lname: "Mouser", email: "demo@demouser.com", password: "123456")
owner2 = User.create!(fname: "Taylor", lname: "Musolf", email: "taylor@taylor.com", password: "123456")


p 'Seeding Pets...'
pet1 = Pet.create!(name: "Leo", owner_id: owner2.id, species: "dog", bio: "The fluffiest dog around", birthdate: "12/13/2016")


p 'Finished Seeding!'