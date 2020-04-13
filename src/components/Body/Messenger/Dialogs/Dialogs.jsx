import React from "react";
import s from "./Dialogs.module.scss"

const Dialogs = (props) => {

    let dialogs = props.dialogData.map(
        d => <div className={s.item}>{d.dialog}</div>
    );

    let text = React.createRef();

    let alertText = () => {
        let addText = text.current.value;
        alert(addText);
    }

    return(
      <div className={s.dialogs}>
          <p className={s.title}> DIALOGS! </p>

          <div className={s.items}>
              {dialogs}
          </div>
          <textarea ref={text}></textarea>
          <button onClick={alertText}>DD</button>
      </div>

    );
};

export default Dialogs;