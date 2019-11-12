import React, {Component} from "react";
// import axios from 'axios'

class ClientForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            phone: "",
            email: ""
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
        // let response = await axios.post(`/users/${this.props.user.id}`, this.state)
    }

    render() {
        return(
            <form onChange = {this.onChange}>
                <label htmlFor = "name">Name:</label>
                <input type = "text" name = "name" value = {this.state.name} />
                    <br/>
                <label htmlFor = "phone">Phone:</label>
                <input type = "number" name = "phone" value = {this.state.phone} />
                    <br/>
                <label htmlFor = "email">Email:</label>
                <input type = "text" name = "email" value = {this.state.email} />
                <input type = "submit" onClick = {this.onSubmit} />
            </form>
        )
    }

}

export default ClientForm;  