import React from "react";
import s from  "./Profile.module.scss"

const Profile = () => {
    return(
       <div className={`${s.profile} ${s.active}`}> Profile </div>
    );
};

export default Profile;
