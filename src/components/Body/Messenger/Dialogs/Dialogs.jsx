import React from "react";
import s from "./Dialogs.module.scss"

const Dialog = (props) => {
    return(
        <div className={s.item}> {props.message} </div>
    )
}

const Dialogs = () => {
    return(
      <div className={s.dialogs}>
          <p className={s.title}> DIALOGS! </p>

          <div className={s.items}>
              <Dialog message="Hi, today i try to refract my code"/>
              <Dialog message="And this moment is really easy"/>
              <Dialog message="Just dream about Redux"/>
              <Dialog message="I hope, that it will be easy like this"/>
              <Dialog message="See you soon!"/>
          </div>
      </div>
    );
};

export default Dialogs;