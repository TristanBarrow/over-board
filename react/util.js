import React from 'react';

export const icon = (tag, style, click) => {
    return (<i onClick={click} className={"material-icons " + style} >{tag}</i>)
}

export const logout = () => {
    console.log('Loggin out');
    $.get('/api/logout', (data) => {
        window.location = '/login';
    });
}