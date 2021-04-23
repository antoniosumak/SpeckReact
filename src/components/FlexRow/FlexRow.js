import React from "react";
import "./FlexRow.scss";

const FlexRow = (props) => {
    return ( 
        <div className="Flex">
        {props.children}
        </div>
     );
}
 
export default FlexRow;