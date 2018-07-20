import React from 'react';
import { icon } from '../../util';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }
    componentDidMount = () => {
        this.getFriend(this.props.id);
    }

    getFriend = (id) => {
        console.log('Friend id ', id);
        $.get('/api/user/byId/' + id, (data) => {
            this.setState({
                username: data
            });
        });
    }
    removeFriend = () => {
        const req = {
            type: 'delete',
            url: '/api/following',
            data: {
                username: this.props.me,
                followed: this.state.username
            },
            success: () => {
                console.log('Deleted', this.state.username);
            }
        };
        $.ajax();
    }

    render() {
        console.log('Single Friend', this.props.id);
        return(
            <div>
                {this.state.username}
                {icon('remove','addFriendIcon', this.removeFriend)})}
            </div>
        );
    } 
}

export default Friend;