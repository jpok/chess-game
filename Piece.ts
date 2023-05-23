import { MoveSet } from "./MoveSet";

export abstract class Piece {    
    protected static moveSet: MoveSet;
    constructor(
        protected readonly color: string, 
        protected position: Position
        ) { }

    abstract canMoveTo(moveToPosition: Position) : boolean    
}
