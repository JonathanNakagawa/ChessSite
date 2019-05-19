import Piece from './piece.js'

export default class Pawn extends Piece {
    constructor(player) {
        super(player, (player === 1? "../images/Pawn_White.png" : "../images/Pawn_Black.png"));
        this.inInitialPos = true;
    }

    isPossibleMove(srcX, srcY, destX, destY, destEnemyOccupied) {
        if(this.player === 1) {
            ret = (((srcX === destX) && (srcY + 1 === destY)) || 
            (((srcX === destX) && (srcY + 2 === destY)) && this.inInitialPos) || 
            ((Math.abs(destX - srcX) === 1) && (srcY + 1 === destY) && destEnemyOccupied));
            this.inInitialPos = false;
            return ret;
        }
        else if (this.player === 2) {
            ret = (((srcX === destX) && (srcY - 1 === destY)) || 
            (((srcX === destX) && (srcY - 2 === destY)) && this.inInitialPos) || 
            ((Math.abs(destX - srcX) === 1) && (srcY - 1 === destY) && destEnemyOccupied));
            this.inInitialPos = false;
            return ret;
        }
    }
}
