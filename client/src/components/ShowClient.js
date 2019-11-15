import React from "react"
import axios from "axios"

function ShowClient(props) {
    async function handleDelete() {
    let deleted = await axios.delete(`/users/${props.user.id}`)
    window.location.reload()
    // refresh page on delete
        console.log(deleted)
    }


    return(
        <div className = "client-container">
            <div className = "client-list">
                <p>{props.user.client}</p>
                <p>{props.user.phone}</p>
                <p>{props.user.email}</p>
                <div className = "buttons-format">
                <button onClick = {props.onClickEdit}>Edit</button>
                <button onClick = {handleDelete}>Delete</button>
                <button onClick = {props.goBack}>Return</button>
                </div>
            </div>
        </div>
    )
}

export default ShowClient;