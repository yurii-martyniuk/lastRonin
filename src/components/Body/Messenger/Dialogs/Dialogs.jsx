import React from "react";
import s from "./Dialogs.module.scss"

const Dialogs = (props) => {

    let dialogs = props.dialogData.map(
        d => <div className={s.item}>{d.dialog}</div>
    );

    return(
      <div className={s.dialogs}>
          <p className={s.title}> DIALOGS! </p>

          <div className={s.items}>
              {dialogs}
          </div>
      </div>
    );
};

export default Dialogs;