import React from "react";
import s from "./Senders.module.scss"

const Senders = () => {
    return(
      <div className={s.senders}>

          <p className={s.title}> SENDERS: </p>

          <div className={s.items}>
              <div className={s.item}> ARSEN </div>
              <div className={s.item}> ARSEN </div>
              <div className={s.item}> ARSEN </div>
              <div className={s.item}> ARSEN </div>
              <div className={s.item}> ARSEN </div>
          </div>
      </div>
    );
};

export default Senders;