class ApplicationController < ActionController::Base
  include HTTParty

  def show
    url = "http://hn.algolia.com/api/v1/search?tags=front_page"
    response = HTTParty.get(url)

    @data = response.body
  end
end
