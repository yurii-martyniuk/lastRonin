import React from "react";
import s from "./Dialogs.module.scss"

const Dialogs = () => {
    return(
      <div className={s.dialogs}>
          <p className={s.title}> DIALOGS! </p>

          <div className={s.items}>
              <div className={s.item}> Hello, how are u? </div>
              <div className={s.item}> Hello, how are u? </div>
              <div className={s.item}> Hello, how are u? </div>
              <div className={s.item}> Hello, how are u? </div>
              <div className={s.item}> Hello, how are u? Hello, how are u?Hello, how are u?Hello, how are u?Hello, how are u?Hello, how are u?Hello, how are u?Hello, how are u?Hello, how are u?Hello, how are u?Hello, how are u?Hello, how are u?Hello, how are u?</div>
          </div>
      </div>
    );
};

export default Dialogs;