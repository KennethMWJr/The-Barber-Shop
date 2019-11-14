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
        let response = await axios.get("/barbers")
        console.log(response.data)
        let barbers = response.data.barber;
        this.setState({
            barbers: barbers

        })
    }

    render() {
        return (
        <div>
             {this.state.barbers.map( (barber, i) => { 
                  return ( <div className = "each-barber" key={i}>
                  <h2 className = "barber-name">{barber.name}</h2>
                  <img src={barber.photo} alt="barber" />
                  <UserList barberId = {barber.id} />
                  <ClientList barberId = {barber.id} />
                  </div> )
             })} 

        </div>
        )
    }
}

export default ShowBarbers;