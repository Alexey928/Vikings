import {Colors} from "./Colors";
import {Figure} from "./figures/Figure";
import {Board} from "./board";

export class Cell{
 readonly x:number;
 readonly y:number ;
 readonly colors:Colors ;
 figure: Figure | null;
 board:Board
 avaliable:boolean;
 id:number;
 constructor(board:Board, x:number,y:number,color:Colors,figure:Figure|null){
     this.x = x;
     this.y =y;
     this.colors = color
     this.figure=figure
     this.board = board
     this.avaliable =false;
     this.id = Math.random()
 }
}