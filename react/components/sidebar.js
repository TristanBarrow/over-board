import React from 'react';
import $ from 'jquery';
import AllUsers from './allUsers';
import Followers from './followers';

class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            allUsers: '',
            following: ''
        }
    }
    componentDidMount() {
        var userArray = [];
        $.get('/api/me', (data) => {
            this.setState({
                username: data.username
            });
            $.get('/api/following/' + data.username, (data) => {
                data.forEach((e) => {
                    $.get('/api/user/byId/' + e.following, (data) => {
                        userArray.push(data);
                        this.setState({
                            following: userArray
                        });
                    });
                });
            });
        });
        $.get('/api/user/all', (data) => {
            this.setState({
                allUsers: data
            });
        });
        
    }

    updateUsers = () => {
        var userArray = [];
        console.log('UPDATING');
        $.get('/api/following/' + this.state.username, (data) => {
            data.forEach((e) => {
                $.get('/api/user/byId/' + e.following, (data) => {
                    userArray.push(data);
                    this.setState({
                        following: userArray
                    });
                });
            });
        });
    }

    render() {
        return (
            <div>
                {this.props.username}
                {this.state.following != '' ? 
                    <Followers
                        users={this.state.following}
                        username={this.state.username}
                        update={this.updateUsers}
                    /> : ''}
                {this.state.allUsers != '' ? 
                    <AllUsers
                        users={this.state.allUsers}
                        username={this.state.username}
                        update={this.updateUsers}
                    /> : ''}
     
                
            </div>
        );
    }
}

export default SideBar;