class DaysController < ApplicationController
  def index
    render json: []
  end

  def show
    render json: {day: {id: 'today', goal: 90}}
  end
end
