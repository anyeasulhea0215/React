import React,{memo} from "react";

import {Blocks} from "react-loader-spinner";

const Spinner= memo(({
    loading=true,width=100, height=100
}) => {
    return(
        <Blocks
           visible={loading}
           width={width}
           height={height}
           ariaLabel="blocks-loading"
           wrapperStyle={{
            position:"fixed",
            zIndex:99999,
            left:"50%",
            top:"50%",
            transform:"translate(-50%,-50%)",
           }}
           wrapperClass="blocks-wrapper"
        />
    );
});

export default Spinner;