# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

Pet.destroy_all
User.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('pets')

p 'Seeding Users...'
owner1 = User.create!(fname: "De", lname: "Mouser", email: "demo@demouser.com", password: "123456")
owner2 = User.create!(fname: "Taylor", lname: "Musolf", email: "taylor@taylor.com", password: "123456")


p 'Seeding Pets...'
pet1 = Pet.create!(name: "Leo", owner_id: owner2.id, species: "dog", bio: "The fluffiest dog around", birthdate: "12/13/2016")
file1 = URI.open('https://pet-network-seeds.s3.us-west-1.amazonaws.com/leo_on_couch.JPG')
pet1.photo.attach(io: file1, filename: 'leo.JPG')

pet2 = Pet.create!(name: "Victor", owner_id: owner1.id, species: "dog", bio: "The properest dog around", birthdate: "01/13/2020")
file2 = URI.open('https://pet-network-seeds.s3.us-west-1.amazonaws.com/victor.jpg')
pet2.photo.attach(io: file2, filename: 'victor.jpg')


p 'Finished Seeding!'

