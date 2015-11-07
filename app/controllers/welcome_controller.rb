class WelcomeController < ApplicationController
  def index
  end

  def login
    respond_to do |format|
      format.js
      format.html
    end
  end
end
