class ApplicationController < ActionController::Base 
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token
end
# Create 
# @user = User.find(params[:id])
# @client = @user.client.builds(create_params)
# @client.save