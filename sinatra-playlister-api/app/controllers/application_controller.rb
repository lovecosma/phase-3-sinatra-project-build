require './config/environment'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  # use Rack::JSONBodyParser

  configure do
    set :public_folder, 'public'
  end

  get "/" do
    "Welcome"
  end

end
