import React from "react";
import s from "./Senders.module.scss"
import {NavLink} from "react-router-dom";

const Sender = (props) => {
    return(
        <NavLink to={`${"/messenger/"}${props.id}`}  className={s.item} activeClassName={s.active}>{props.name}</NavLink>
    )
}

const Senders = () => {
    return(
      <div className={s.senders}>

          <p className={s.title}> SENDERS: </p>

          <div className={s.items}>
              <Sender id="1" name="Petr"/>
              <Sender id="2" name="Alex"/>
              <Sender id="3" name="Johan"/>
          </div>
      </div>
    );
};

export default Senders;