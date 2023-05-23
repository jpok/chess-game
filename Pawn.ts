import { pawnMoveSet } from "./MoveSet";
import { Piece } from "./Piece";

class Pawn extends Piece {
    readonly moveSet = pawnMoveSet;

    canMoveTo(moveToPosition: Position): boolean {
        return this.moveSet[moveToPosition];
    }
}