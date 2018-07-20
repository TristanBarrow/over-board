import React from 'react';
import { icon } from '../../util';

class User extends React.Component{
    constructor(props) {
        super(props);
    }

    addFollower = () => {
        const data = {
            username: this.props.me,
            followed: this.props.username
        }
        $.post('/api/following', data, (data) => {
            this.props.update(0);
        });
    }

    render() {
        return(
            <div>
                {this.props.username}
                {this.props.showButton ? icon('add','add-follower-icon', this.addFollower) : ""}
            </div>
        );
    }   
}

export default User;