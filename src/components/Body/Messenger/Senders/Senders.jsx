import React from "react";
import s from "./Senders.module.scss"
import {NavLink} from "react-router-dom";





const Senders = (props) => {


    let sender = props.state.messenger.senderData.map(
        i =>  <NavLink to={`${"/messenger/"}${i.id}`}  className={s.item} activeClassName={s.active}>{i.name}</NavLink>
    )
    return(
      <div className={s.senders}>

          <p className={s.title}> SENDERS: </p>

          <div className={s.items}>
              {sender}
          </div>
      </div>
    );
};

export default Senders;