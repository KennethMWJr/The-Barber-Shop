import React, {Component} from 'react';
import axios from 'axios'

class ShowBarbers extends Component {
    constructor () {
        super()
        this.state = {
          barber: [] 
        }
    }

    componentDidMount = async () => {
        let response = await axios.get("/barbers")
        console.log(response.data)
        let barbers = response.data.barber;
        this.setState({
            barber: barbers

        })
    }

    render() {
        return (
        <div>
             {this.state.barber.map( barber => { 
                  return ( <div>
                  <p>{barber.name}</p>
                  <img src={barber.photo} alt="barber" />
                  <p></p>
                  </div> )
             })} 

        </div>
        )
    }
}

export default ShowBarbers;