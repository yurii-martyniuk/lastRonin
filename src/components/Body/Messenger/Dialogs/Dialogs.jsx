import React from "react";
import s from "./Dialogs.module.scss"

let dialogData = [
    {dialog : 'Hi, today i try to refract my coffee'},
    {dialog : 'And this moment is really easy'},
    {dialog : 'Just dream about Redux'},
    {dialog : 'I hope, that it will be easy like this'},
    {dialog : 'See you soon!'},
]

let dialogs = dialogData.map(
    d => <div className={s.item}>{d.dialog}</div>
);


const Dialogs = () => {
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