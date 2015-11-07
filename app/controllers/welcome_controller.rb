class WelcomeController < ApplicationController
  def index
  end

  def login
  end

  def signup
  end

  def fetch_repo
    @repos = []
    current_user = 1
    github = Github.new
    @response = github.repos.list user: 'andela-kadeniyi'
    @response.each do |repo|
      @repos << Repo.new(name: repo.name, description: repo.description, user_id: current_user)
    end

    Repo.import @repos
    render 'repo'
  end
end
