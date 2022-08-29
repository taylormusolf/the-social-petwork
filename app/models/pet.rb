# == Schema Information
#
# Table name: pets
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :bigint
#  species    :string           not null
#  bio        :string
#  birthdate  :date
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Pet < ApplicationRecord

  validates :name, presence: true

  belongs_to :owner,
    class_name: :User,
    foreign_key: :owner_id

  # has_many :posts,
  #   dependent: :destroy

  # has_many :likes,
  #   dependent: :destroy
  
end
