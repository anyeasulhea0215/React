import React from "react";



const MyChildrenSub= ( {color, size=3 , children})  => {

    return(
        <div>
            <h3>MyChildrenSub</h3>
            <font color={color} size={size}> {children}</font>
        </div>
    );
};


export default MyChildrenSub;