import React from 'react';
import $ from 'jquery';
import { icon } from '../util';

class AllUsers extends React.Component {
    constructor(props) {
        super(props);
    }

    addFriend = (followed) => {
        const data = {
            username: this.props.username,
            followed: followed
        };

        $.post('/api/following', data, (data) => {
            console.log(data);
            this.props.update();
        });
    }

    render() {
        return (
            <div className='all-users'>
                {this.props.users.map((e) => {
                    return(
                        <div key={e.username}>
                            <span>{e.username}</span>
                            <div onClick={() =>this.addFriend(e.username)} >{icon('add', 'all-users-add')}</div>
                        </div>
                        
                    );
                })}
            </div>
        );
    }
}

export default AllUsers;