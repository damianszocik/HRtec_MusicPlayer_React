import React from "react";
//buttons rounded
function ButtonBackground({id, styleName = ""}) {
    return (
      <a id={id} className={styleName} href="#"></a>
    );
}

export default ButtonBackground;