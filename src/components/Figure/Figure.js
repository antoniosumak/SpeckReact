import React from "react";
import "./Figure.scss";


const Figure = ({image}) => {
    return ( 
        <figure className="Figure">
          <img
            src={image}
            alt="UX/UI design workshop"
            class="Figure-Image"
          />
        </figure>
     );
}
 
export default Figure;