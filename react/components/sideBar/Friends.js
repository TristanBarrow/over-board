import React from 'react';
import Friend from './Friend';


class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        }
    }

    componentDidMount = () => {
        this.getFriends();
    }

    getFriends = () => {
        console.log('Getting Friends for ', this.props.me);
        $.get('/api/following/' + this.props.me, (data) => {
            console.log('Returned Friends for ', this.props.me, data);
            this.setState({
                friends: data
            });
        });
    }

    render() {
        console.log("Rendering Friends: ", this.state.friends);
        return (
            <div>
                {this.state.friends.map(friend => {
                    return (
                        <Friend 
                            id={friend.following}
                            update={this.getFriends}
                            me={this.props.me}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Friends;