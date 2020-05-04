import React from "react";
import s from "./Users.module.scss"
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(
                response.data.items
            )
        })
    }
    render() {

        let pagesCount = this.props.totalUsersCount / this.props.pageSize
        console.log(pagesCount + '<= this shit')
        let pages = []
        for(let i = 1; i <= 20; i++){
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map( p => {
                       return <span
                           className={this.props.currentPage === p && s.selected}
                           onClick={ (e) => {this.onPageChanged(p)} }
                       >
                           {p}</span>
                    })}
                </div>
                <div>
                    <div className={s.title}>
                        {
                            this.props.users.map(u => <div key={u.id}>
                                <div>{u.name}</div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            this.props.follow(u.id)
                                        }}>Follow</button>
                                    }
                                </div>
                            </div>)

                        }
                    </div>
                </div>
            </div>


        )
    }
}

export default Users;