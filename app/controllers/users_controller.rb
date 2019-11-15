class UsersController < ApplicationController
    # skip_before_action :verify_authenticity_token
    # before_action :set_user, only: [:show, :update]
    
    
    def index
        @users = User.all
        render json: { 
            message: "ok", 
            user: @users
        }
    end

    def show
        begin
            @user = User.find(params[:id])
            render json: { 
                message: "ok", 
                user: @user 
            }
        rescue ActiveRecord::RecordNotFound
            render json: { 
                message: "user not found by that ID"
                }, status: 404
        rescue StandardError => e
            render json: { 
                message: e.to_s 
                }, status: 500
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: { 
                message: "ok", 
                user: @user
            }
        else
            render json: { 
                message: @user.errors 
                }, status: 500
        end
    end

    def update
        @user = User.find(params[:id])
        @user.update(user_params)
        render json: { user: @user }
    end

    def destroy
        @user = User.destroy(params[:id])
        render json: { status: 204 }
    end


    def set_user
        user = User.find(params[:id])
    end

    def user_params
        params.permit(:client, :phone, :email, :barber_id)
    end

end




   

