import React from "react"
// import axios from "axios"

function ShowClient(props) {
    async function handleDelete() {
        // let deleted = axios.delete(`/users/${props.user.id}`)
        console.log(deleted)
    }

    return(
        <div>
            <p>{props.user.name}</p>
            <p>{props.user.phone}</p>
            <p>{props.user.email}</p>
            <button onClick = {props.onClickEdit}>Edit</button>
            <button onClick = {handleDelete}>Delete</button>
        </div>
    )
}

export default ShowUser;