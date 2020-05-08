import React from 'react'
import s from "./Users.module.scss";

const Users = (props) => {

    let pagesCount = props.totalUsersCount / props.pageSize
    console.log(pagesCount + '<= this shit')
    let pages = []
    for(let i = 1; i <= 20; i++){
        pages.push(i)
    }
    return(
        <div>
            <div>
                {pages.map( p => {
                    return <span
                        className={props.currentPage === p && s.selected}
                        onClick={ (e) => {props.onPageChanged(p)} }
                    >
                           {p}</span>
                })}
            </div>
            <div>
                <div className={s.title}>
                    {
                        props.users.map(u => <div key={u.id}>
                            <div>{u.name}</div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
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

export default Users