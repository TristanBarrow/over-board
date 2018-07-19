import React from 'react';
import Body from './body';
import SideBar from './sidebar';
import Header from './header';
import $ from 'jquery';

class Layout extends React.Component{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className='page'>
                <Header />
                <SideBar />
                <Body />
            </div>
        );
    }
    
}


export default Layout;