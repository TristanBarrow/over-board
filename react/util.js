import React from 'react';

export const icon = (tag, style, click) => {
    return (<i onClick={click} className={"material-icons " + style} >{tag}</i>)
}

