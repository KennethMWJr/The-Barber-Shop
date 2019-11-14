import React, {Component} from "react";
import User from "./User";
import axios from "axios"



class UserList extends Component {
    constructor () {
        super()
        this.state = {
            users: [],
            clientForm: false
        }
    }

    componentDidMount = async () => {
        let response = await axios.get("/users")
        console.log(response.data.user)
        this.setState({
            users: response.data.user
        })
    }

    onClick = () => {
        this.setState({
            clientForm: true
        })
        
    } 

    render() {
       
        const renderList = this.state.users.map(user => {
            if (this.props.barberId == user.barber_id) {
                return <User key = {user.id} user = {user}/>
            } 

        })
        return (<div>
            
            { this.state.clientForm ? renderList : <button onClick = {this.onClick}>Barber's list</button>}
            </div>)

    }
}

export default UserList;