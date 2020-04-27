import React from "react";
import s from "./Users.module.scss"
import * as axios from "axios";

const Users = (props) => {
    if (props.users.length ===  0){

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(
                response.data.items
            )
        })

    }



    return(
        <div className={s.title}>
            {
                props.users.map( u => <div key={u.id}>
                    <div>{u.name}</div>
                    <div>
                        {u.followed
                            ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={ () => {props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </div>)

            }
        </div>
    )
};

export default Users;