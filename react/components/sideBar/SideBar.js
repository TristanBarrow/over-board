import React from 'react';
import Followers from './Followers';
import Users from './Users';

class SideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            followers: [],
        }
    }

    componentDidMount = () => {
        this.updateFollowers();
    }

    updateFollowers = () => {
        $.get('/api/following', (data) => {
            const u = data.map(e => {
                return e.username;
            });
            this.setState({
                followers: u
            });
        });
    }

    render () {
        return (
            <div className='sideBar'>
                - Followers -
                <Followers
                    update={this.updateFollowers}
                    followers={this.state.followers}
                    me={this.props.me}
                />
                - Users -
                <Users 
                    update={this.updateFollowers}
                    followers={this.state.followers}
                    me={this.props.me}
                />
            </div>
        )
    };
}



export default SideBar;