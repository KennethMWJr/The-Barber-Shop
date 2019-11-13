class BarbersController < ApplicationController
    # skip_before_action :verify_authenticity_token
    # before_action :set_barber, only: [:index, :show, :create, :update, :delete]
    
    def index
        @barbers = Barber.all
        render json: { 
            message: "ok", 
            barber: @barbers 
        }
    end

    def show
        begin
            @barber = Barber.find(params[:id])
            render json: { 
                message: "ok", 
                barber: @barber 
            }
        rescue ActiveRecord::RecordNoteFound
            render json: { 
                message: "barber not found by that ID"
                }, status: 404
        rescue StandardError => e
            render json: { 
                message: e.to_s 
                }, status: 500
        end
    end

    def create
        @barber = Barber.new(barber_params)
        if @barber.save
            render json: { 
                message: "ok", 
                barber: @barber
            }
        else
            render json: { 
                message: @barber.errors 
                }, status: 500
        end
    end

    def update
        @barber = Barber.find(params[:id])
        @barber.update(barber_params)
        render json: { barber: @barber }
    end

    def destroy
        @barber = Barber.destroy(params[:id])
        render json: { status: 204 }     
    end


    def set_barber   
        barber = Barber.find(params[:id])
    end

    def barber_params
        params.permit(:name, :photo)
    end

end

