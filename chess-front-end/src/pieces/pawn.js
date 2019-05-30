import Piece from './piece.js'

export default class Pawn extends Piece {
    constructor(player) {
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"));
        this.inInitialPos = true;
    }

    isPossibleMove(srcX, srcY, destX, destY, destEnemyOccupied) {
        if(this.player === 1) {
            const ret = (((srcX === destX) && (srcY + 1 === destY)) || 
            (((srcX === destX) && (srcY + 2 === destY)) && this.inInitialPos) || 
            ((Math.abs(destX - srcX) === 1) && (srcY + 1 === destY) && destEnemyOccupied));
            this.inInitialPos = false;
            return ret;
        }
        else if (this.player === 2) {
            const ret = (((srcX === destX) && (srcY - 1 === destY)) || 
            (((srcX === destX) && (srcY - 2 === destY)) && this.inInitialPos) || 
            ((Math.abs(destX - srcX) === 1) && (srcY - 1 === destY) && destEnemyOccupied));
            this.inInitialPos = false;
            return ret;
        }
    }
}
