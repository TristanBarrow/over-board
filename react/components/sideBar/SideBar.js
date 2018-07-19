import React from 'react';
import Friends from './Friends'

const SideBar = (props) => {
    console.log("Rendering Side Bar with: ", props)
    return (
        <div className='sideBar'>
            - Friends -
            <Friends
                me={props.me}
            />
        </div>
    )
};

export default SideBar;