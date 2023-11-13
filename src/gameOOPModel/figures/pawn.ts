import {FifureNames, Figure} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../cell";
import blackPawn from "../../../public/blackPawn.png"
import whitePawn from "../../../public/whitePawn.png"

export class Pawn extends Figure{
  constructor(colors: Colors, cell: Cell) {
    super(colors, cell);
    this.logo = colors === Colors.BLACK?blackPawn:whitePawn;
    this.name = FifureNames.PAWN
  }



}

