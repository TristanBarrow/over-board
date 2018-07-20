import React from 'react';
import { icon } from '../../util';

class Follower extends React.Component {
    constructor(props) {
        super(props);
    }

    removeFollower = () => {
        const req = {
            type: 'delete',
            url: '/api/following',
            data: {
                username: this.props.me,
                followed: this.props.username
            },
            success: () => {
                this.props.update();
            }
        };
        $.ajax(req);
    }

    render() {
        return(
            <div>
                {this.props.username}
                {icon('remove','addFollowerIcon', this.removeFollower)}
            </div>
        );
    } 
}

export default Follower;