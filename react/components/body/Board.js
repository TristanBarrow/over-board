import React from 'react';

class Board extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='board' onClick={this.props.click}>
                {this.props.name}
            </div>
        );
    }   
}

export default Board;