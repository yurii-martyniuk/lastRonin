import React from "react";
import s from  './Data.module.scss';

const Data = () => {
    return(
     <div className={s.data}>
         <div className={s.name}>
             John
         </div>
         <div className={s.surname}>
             Cena
         </div>
     </div>
    )
}

export default Data;