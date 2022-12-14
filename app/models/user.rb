# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

  validates :fname, :lname, :password_digest, :session_token, :email, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  #has_secure_password #gives password getter / password=, presence validation / password_confirmation (another @ to check against)/authenticate

  has_many :pets,
    foreign_key: :owner_id,
    dependent: :destroy

  
  before_validation :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user&.is_password?(password) #can use authenticate instead of is_password with has_secure_password
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = User.generate_unique_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_unique_session_token
  end


  private

  def self.generate_unique_session_token
    while true
      token = SecureRandom::urlsafe_base64
      return token unless User.exists?(password_digest: token)
    end
  end


end
