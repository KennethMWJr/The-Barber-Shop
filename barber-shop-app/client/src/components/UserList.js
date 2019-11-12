import React, {Component} from "react";
import User from "./User";
// import axios from "axios"

class UserList extends Component {
    constructor () {
        super()
        this.state = {
            user: []
        }
    }

    componentDidMount = async () => {
        // let response = await axios.get("/users")
        console.log(response.data)
        this.setState({
            user: response.data
        })
    }

    render() {

        return (<div className = "flex-container">
              {this.state.user.map(user => { 
                //  return <User key = {user.id} user = {user} /> 
             })} 
                </div>)
    }
}

export default UserList;