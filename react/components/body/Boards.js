import React from 'react';
import Board from './Board';

class Boards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: []
        }
    }

    componentDidMount = () => {
        $.get('/api/boards', (data) => {
            console.log(data);
            this.setState({
                boards: data
            });
        });
    }

    render() {
        let i = 0;
        return (
            <div> 
            {
                this.state.boards.map(board => {
                    console.log(board);
                    return (
                        <Board 
                            key={i++}
                            name={board.name}
                            click={() => console.log(board.name + ' was clicked')}
                        /> 
                    );
                })
            }
            </div>
        );
    }
}

export default Boards;