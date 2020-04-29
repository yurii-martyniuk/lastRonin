import React from "react";
import s from "./Users.module.scss"
import * as axios from "axios";

class Users extends React.Component{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(
                response.data.items
            )
        })
    }

    render() {
        return(
            <div>
                <div className={s.title}>
                    {
                        this.props.users.map( u => <div key={u.id}>
                            <div>{u.name}</div>
                            <div>
                                {u.followed
                                    ? <button onClick={ () => {this.props.unfollow(u.id)}}>Unfollow</button>
                                    : <button onClick={ () => {this.props.follow(u.id)}}>Follow</button>
                                }
                            </div>
                        </div>)

                    }
                </div>
            </div>

        )
    }
}

export default Users;