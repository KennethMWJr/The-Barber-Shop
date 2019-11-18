import React, {Component} from 'react';
import axios from 'axios';
import UserList from './UserList';
import ClientList from './ClientList'

class ShowBarbers extends Component {
    constructor () {
        super()
        this.state = {
          barbers: [] 
        }
    }

    componentDidMount = async () => {
        let response = await axios.get("https://limitless-citadel-56053.herokuapp.com/barbers")
        console.log(response.data)
        let barbers = response.data.barber;
        this.setState({
            barbers: barbers

        })
    }

    render() {
        return ( 
        <div className = "barbers-parent">
            <div className = "barber-container">
            {/* mapping through array of objects containing barbers and receiving barber by name and by photo */}
                {this.state.barbers.map( (barber, i) => { 
                    return ( <div className = "each-barber" key={i}>
                    <h1 className = "barber-name">{barber.name}</h1>
                    <img src={barber.photo} alt="barber" />
                    {/* pass barber by id to two components "Userlist" and "ClientList" */}
                    <UserList barberId = {barber.id} />
                    <ClientList barberId = {barber.id} />
                    </div> )
                })} 

            </div>
        </div>
        )
    }
}

export default ShowBarbers;