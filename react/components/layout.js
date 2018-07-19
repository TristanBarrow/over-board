import React from 'react';
// import Body from './body';
// import SideBar from './sidebar';
// import Header from './header';
import $ from 'jquery';

class Layout extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            username: ''
        };
    }
    componentDidMount() {
        $.get('/api/me', (data) => {
            this.setState({
                username: data.username
            });
        });
    }

    render () {
        return (
            <div className='page'>
                {this.state.username}
                {/* <Header />
                <SideBar 
                    username={this.state.username}
                />
                <Body /> */}
            </div>
        );
    }
    
}


export default Layout;