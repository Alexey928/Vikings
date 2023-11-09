import React from 'react';
import style from './cell.module.css'


interface cellPropsInterfase {
color?:string
}

const CellComponent:React.FC<cellPropsInterfase> = () => {
    return (
        <div className={style.cell}>

        </div>
    );
};

export default CellComponent;