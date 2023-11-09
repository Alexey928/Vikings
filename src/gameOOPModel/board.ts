import {Cell} from "./cell";
import {Colors} from "./Colors";


export class Board{
    constructor(sise:number) {
        this.sise = sise
    }
    sise:number = 0;
    cells:Cell[][]=[];

    public initBoard(){
        for(let i = 0; i < this.sise; i++){
            let row:Cell[]=[];
            for(let j = 0; j < this.sise; j++){
                i===0 && row.push(new Cell(this,i,j,Colors.BLACK, null))//pirimetr
                i=== this.sise - 1 && row.push(new Cell(this,i,j,Colors.BLACK, null))//pirimetr
                i!==0 && i!==this.sise-1 && j===0 && row.push(new Cell(this,i,j,Colors.BLACK, null))//pirimitr
                i!==0 && i!==this.sise-1 && j===this.sise-1&& row.push(new Cell(this,i,j,Colors.BLACK, null))//pirimitr
                i!==0 && i!==this.sise-1 && j!==this.sise-1&& j!==0 && row.push(new Cell(this,i,j,Colors.WHITE,null))//center
            }
            this.cells.push(row);
        }
        return this.cells
    }
}