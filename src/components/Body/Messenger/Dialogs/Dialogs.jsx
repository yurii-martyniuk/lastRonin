import React from "react";
import s from "./Dialogs.module.scss"
import {addNewMessage, updateMessageArea} from "../../../../redux/messenger-reducer";

const Dialogs = (props) => {

    let dialogs = props.dialogData.map(
        d => <div className={s.item}>{d.dialog}</div>
    );

    let text = React.createRef();

    let addMessage = () => {
        props.dispatch(addNewMessage())
    }

    let updateText = () => {
        let addText = text.current.value;
        props.dispatch(updateMessageArea(addText))
    }

    return(
      <div className={s.dialogs}>
          <p className={s.title}> DIALOGS! </p>

          <div className={s.items}>
              {dialogs}
          </div>
          <textarea
              ref={text}
              onChange={updateText}
              value={props.newMessageData}
          >

          </textarea>
          <button onClick={addMessage}>DD</button>
      </div>

    );
};

export default Dialogs;