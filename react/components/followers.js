import React from 'react';
import $ from 'jquery';
import { icon } from '../util';

class Followers extends React.Component {
    constructor(props) {
        super(props);
    }

    removeFriend = (followed) => {
        const data = 

        $.ajax({
            url: "/api/following",
            data: {
                username: this.props.username,
                followed: followed
            },
            type: "delete",
            success: (data) => {
                console.log(this.props.update);
                
            }
        });
    }

    render() {
        var i = 0;
        return (
            <div className='followers'>
                {this.props.users.map((e) => {
                    console.log(e);
                    return(
                        <div key={i++}>
                            <span>{e}</span>
                            <div onClick={() =>this.removeFriend(e)} >{icon('remove','followers-user')}</div>
                        </div>
                        
                    );
                })}
            </div>
        );
    }
}

export default Followers;