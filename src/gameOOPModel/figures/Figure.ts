import {Colors} from "../Colors";
import {Cell} from "../cell";
import {useId} from "react";
import Logo from "../../../public/King.png"


export enum FifureNames{
    FIGURE="",
    KING="король",
    PAWN="пішак",
}

export class Figure{
    colors:Colors;
    logo: typeof Logo;
    cell:Cell;
    name:string;
    id:string;



    constructor(colors: Colors, cell: Cell) {
        this.colors = colors;
        this.logo = "";
        this.cell = cell;
        this.name = FifureNames.FIGURE
        this.id = useId();
    }
    canMow(target:Cell):boolean{
        return true
    }

    mowFigure(target:Cell){

    }




}