import React from 'react';
import style from './cell.module.css'
import {Cell} from "../../../gameOOPModel/cell";


interface cellPropsInterfase {
color?:string
    cell:Cell
}

const CellComponent:React.FC<cellPropsInterfase> = () => {
    return (
        <div className={style.cell}>

        </div>
    );
};

export default CellComponent;