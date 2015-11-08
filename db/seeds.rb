# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create(
    first_name: 'Guest',
    last_name: 'User',
    guest: true,
    languages: ['PHP', 'HTML', 'C++', "JS"],
    email: 'guest@disgui.se',
    provider: 'twitter'
  )

basic_profile = BasicProfile.create(
    first_name: 'Guest',
    last_name: 'User',
    formatted_name: "Guest User",
    headline: "Amazingly excited about everythung",
    location: "USA",
    industry: "Music",
    summary: "I love everything I see, I see things with a different perspective and I want to be awesome",
    picture_url: "http://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2013/01/24/12/v2-cute-cat-picture.jpg",
    user: user
    )

repo = Repo.create(
  name: 'Vandermeerlab',
  url: 'https://github.com/guestrumble/vandermeerlab',
  description: 'yes whatever it is',
  user: user,
  language: "",
  forks_url: 'https://github.com/guestrumble/vandermeerlab'
)

position = Position.create(
    title: 'Awesome Meister',
    summary: 'I always feel awesome',
    start_date: Date.today - 1.year,
    is_current: true,
    company: 'Awesome Inc.',
    user: user
)
