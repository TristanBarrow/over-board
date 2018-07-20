import React from 'react';
import User from './User';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount = () => {
        $.get('/api/user/all', (data) => {
            const u = data.map(e => {
                return e.username;
            });
            this.setState({
                users: u
            });
        });
    }

    checkUser = (user) => {
        return this.props.followers.indexOf(user) > -1;
    }
    render() {
        return (
            <div>
                {this.state.users.map(user => {
                    this.checkUser(user);
                    if (user == this.props.me) {
                        return null;
                    }
                    return (
                        <User
                            key={user}
                            username={user}
                            me={this.props.me}
                            update={this.props.update}
                            showButton={!this.checkUser(user)}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Users;