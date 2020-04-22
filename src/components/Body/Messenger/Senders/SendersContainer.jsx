import React from "react";
import Senders from "./Senders";
import StoreContext from "../../../../redux/StoreContext";

const SendersContainer = () => {
    return(
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    return(
                        <Senders
                            state = {state}
                        />
                    );
                }

            }
        </StoreContext.Consumer>
    )
};

export default SendersContainer;