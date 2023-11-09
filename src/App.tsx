import React, {useEffect, useState} from 'react';
import './App.css';
import BoardComponent from "./components/game/gameBoard/BoardComponent";
import {Board} from "./gameOOPModel/board";

const size = 11

function App() {
    const [board, setBoard] = useState(new Board(size));
    console.log(board.initBoard());

    useEffect(() => {
        
        }, [])

    const restart = () => {
        const newBoard = new Board(size);
        newBoard.initBoard();
        setBoard(newBoard);
    }
    return (
        <div className={"app"}>
            <BoardComponent board={board} setBoard={() => {
                restart()
            }}/>
        </div>

    );
}

export default App;
