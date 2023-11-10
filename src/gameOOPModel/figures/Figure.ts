import {Colors} from "../Colors";
import {Cell} from "../cell";
import {useId} from "react";


export enum FifureNames{
    FIGURE="",
    KING="король",
    PAWN="пішак",
}

export class Figure{
    colors:Colors;
    logo:null;
    cell:Cell;
    name:string;
    id:string;

    constructor(colors: Colors, cell: Cell) {
        this.colors = colors;
        this.logo = null;
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