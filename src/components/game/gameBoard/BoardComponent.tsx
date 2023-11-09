import React from 'react';
import CellComponent from "./CellComponent";
import style from "./board.module.css"

const BoardComponent = () => {
    return (
        <div className={style.board}>
            <CellComponent/>
            <CellComponent/>
            <CellComponent/>
            <CellComponent/>
        </div>
    );
};

export default BoardComponent;