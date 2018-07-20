import React from 'react';
import Follower from './Follower';

const Followers = (props) => {
    return (
        <div>
            {props.followers.map(follower => {
                return (
                    <Follower
                        key={follower}
                        username={follower}
                        update={props.update}
                        me={props.me}
                    />

                );
            })}
        </div>
    );
}

export default Followers;