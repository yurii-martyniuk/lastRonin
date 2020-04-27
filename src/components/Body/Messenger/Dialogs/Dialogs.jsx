import React from "react";
import s from "./Dialogs.module.scss"

const Dialogs = (props) => {


    let dialogs = props.dialogData.map(
        d => <div className={s.item}>{d.dialog}</div>
    );

    let text = React.createRef();

    let addMessageToTheDialog = () => { //добавляет значение полученые с changingWatcher в state
        props.addNewMessage();
    }

    let changingWatcher = () => {  //наблюдает за изменениями в textarea
        let addText = text.current.value;
        props.updateMessageArea(addText);
    }

    return(
      <div className={s.dialogs}>
          <p className={s.title}> DIALOGS! </p>

          <div className={s.items}>
              {dialogs}
          </div>
          <textarea
              ref={text}
              onChange={changingWatcher}
              value={props.newMessageData}
          >

          </textarea>
          <button onClick={addMessageToTheDialog}>DD</button>
      </div>

    );
};


export default Dialogs;