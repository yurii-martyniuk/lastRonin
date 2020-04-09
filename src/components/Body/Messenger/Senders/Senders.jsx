import React from "react";
import s from "./Senders.module.scss"
import {NavLink} from "react-router-dom";

let senderData = [
    {id : 1, name : "Petr"},
    {id : 2, name : "Alex"},
    {id : 3, name : "Johan"},
];

let sender = senderData.map(
    i =>  <NavLink to={`${"/messenger/"}${i.id}`}  className={s.item} activeClassName={s.active}>{i.name}</NavLink>
)

const Senders = () => {
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