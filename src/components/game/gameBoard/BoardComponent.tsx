import React from 'react';
import CellComponent from "./CellComponent";
import style from "./board.module.css"
import {Board} from "../../../gameOOPModel/board";

interface BoardComponent {
    board: Board
    setBoard: (newBoard: Board) => void
}



const BoardComponent: React.FC<BoardComponent> = ({board, setBoard}) => {
    return (
        <div className={style.board}>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map((cell, index) => <CellComponent cell={cell} key={index}/>)}
                </React.Fragment>)}
        </div>
    );
};

export default BoardComponent;