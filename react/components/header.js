import React from 'react';
//import { logout } from 'react';

const logout = () => {
    console.log('Loggin out');
    $.get('/api/user/logout', (data) => {
        window.location = '/login';
    });
}

const Header = (props) => {
    return (
        <div className='header'>
            <span>OverBoard - {props.name}</span>
            <span className='logout' onClick={() => logout()}>Logout</span>
        </div>
        
    )
};

export default Header;