import React, {Component} from "react";
import axios from 'axios'

class ClientForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            phone: "",
            email: "",
            barber_id: props.barberId
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        const element = e.target
        const {name, value} = element

        this.setState({
            [name] : value
        })
    }

    async onSubmit (){
        let response = await axios.post("/users", this.state)
    }

    render() {
        return(
            <form onChange = {this.onChange}>
                <label htmlFor = "name">Name:</label>
                <input type = "text" name = "name" defaultValue = {this.state.name} />
                    <br/>
                <label htmlFor = "phone">Phone:</label>
                <input type = "text" name = "phone" defaultValue = {this.state.phone} />
                    <br/>
                <label htmlFor = "email">Email:</label>
                <input type = "text" name = "email" defaultValue = {this.state.email} />
                    <br/>
                <input type = "submit" onClick = {this.onSubmit} />
            </form>
        )
    }

}

export default ClientForm;  