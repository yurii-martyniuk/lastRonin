import React from "react";
import Senders from "./Senders";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        state: state
    }
}



const SendersContainer = connect(mapStateToProps, {})(Senders)
export default SendersContainer;