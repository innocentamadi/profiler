LinkedIn.configure do |config|
  config.token = ENV["LINKEDIN_CONSUMER_KEY"]
  config.secret = ENV["LINKEDIN_CONSUMER_SECRET"]
end
