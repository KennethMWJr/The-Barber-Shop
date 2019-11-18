import React, {Component} from "react";
import axios from "axios"
import ClientForm from "./ClientForm";

class UserList extends Component {
    constructor () {
        super()
        this.state = {
            users: [],
            renderForm: false
        }
    }

    componentDidMount = async () => {
        let response = await axios.get("https://limitless-citadel-56053.herokuapp.com/users")
        console.log(response.data.user)
        this.setState({
            users: response.data.user
        })
    }

    onClick = () => {
        this.setState({
            renderForm: !this.state.renderForm
        })
    } 


    render() {
        // filter through array of objects containing users and match their respect barber id with the id of the barber
        const filteredUsers = this.state.users.filter(user => { 
            if (this.props.barberId == user.barber_id) {
                return true;
            } 

            return false;
           })
        return (<div className = "user-list">
                {/* renders number of clients waiting for each barber */}
              <h2>Has {filteredUsers.length} waiting</h2>
              {/* toggles between button and ClientForm, which is a component */}
              { this.state.renderForm ? <ClientForm toggleForm = {this.onClick} barberId = {this.props.barberId} /> : <button onClick = {this.onClick}>Add yourself to list</button>}
                
                </div>)

    }
}

export default UserList;