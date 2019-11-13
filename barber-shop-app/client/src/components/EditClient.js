import React, {Component} from "react";
import axios from 'axios'

class EditClient extends Component {
    constructor(props) {
        super(props)
        const {client, phone, email} = this.props.user
        this.state = {
            client,
            phone,
            email
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

    async onSubmit() {
        let response = await axios.put(`/users/${this.props.user.id}`, this.state)
        this.props.onClickEdit()
    }

    render() {
        return(
            <form onChange = {this.onChange}>
                <label htmlFor = "name">Name:</label>
                <input type = "text" name = "client" defaultValue = {this.state.client} />
                    <br/>
                <label htmlFor = "phone">Phone:</label>
                <input type = "text" name = "phone" defaultValue = {this.state.phone} />
                    <br/>
                <label htmlFor = "email">Email:</label>
                <input type = "text" name = "email" defaultValue = {this.state.email} />
                <input type = "submit" onClick = {this.onSubmit} />
            </form>
        )
    }
}

export default EditClient;