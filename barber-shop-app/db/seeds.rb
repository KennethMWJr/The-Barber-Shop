# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Barber.destroy_all
User.destroy_all

@barber1 = Barber.new(name: 'Calvin Palmer Jr.', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ice-Cube_2014-01-09-Chicago-photoby-Adam-Bielawski.jpg/440px-Ice-Cube_2014-01-09-Chicago-photoby-Adam-Bielawski.jpg')
@barber2 = Barber.new(name: 'Terri Jones', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eve_2011_cropped.jpg/440px-Eve_2011_cropped.jpg')
@barber3 = Barber.new(name: 'Eddie Walker', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/CedrictheEntertainerHWOFMay2013.jpg/440px-CedrictheEntertainerHWOFMay2013.jpg')
@barber1.save
@barber2.save
@barber3.save


User.create!(client: 'Rob', phone: '9178283969',email: 'rob@yahoo.com',  barber: @barber1)
User.create!(
    client: 'Dan',
    phone: 3474026784,
    email: 'dan@yahoo.com',  
    barber: @barber2
   )
User.create!(
    client: 'Jalen Rose',
    phone: 9173839070,
    email: 'jalen@yahoo.com',
    barber: @barber3
   )