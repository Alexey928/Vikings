import {Cell} from "./cell";
import {Colors} from "./Colors";

const mocCelthStartPosition = [
    [0,0,0,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,1,1],
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,0,0,0],
];
const mocVikingsStartPosition = [
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0],
   [0,0,0,1,1,null,1,1,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
]


export class Board{
    constructor(sise:number) {
        this.size = sise
    }
    size:number = 0;
    cells:Cell[][]=[];
    public initBoard(){
        for(let i = 0; i < this.size; i++){
            let row:Cell[]=[];
            for(let j = 0; j < this.size; j++){
                i===0 && row.push(new Cell(this,i,j,Colors.BLACK, null))//pirimetr
                i=== this.size - 1 && row.push(new Cell(this,i,j,Colors.BLACK, null))//pirimetr
                i!==0 && i!==this.size-1 && j===0 && row.push(new Cell(this,i,j,Colors.BLACK, null))//pirimitr
                i!==0 && i!==this.size-1 && j===this.size-1 && row.push(new Cell(this,i,j,Colors.BLACK, null))//pirimitr
                i!==0 && i!==this.size-1 && j!==this.size-1 && j!==0 && row.push(new Cell(this,i,j,Colors.WHITE,null))//center
            }
            this.cells.push(row);
        }
        console.log(Cell)
        return this.cells
    }

     public getCell(x:number,y:number){
        return this.cells[x][y]
     }
     private addPawn(start:Array<Array<number|null>>){

     }
     public addFigures(){

     }


}