json.user do
    json.extract! @user, :email, :lname, :fname, :id
end