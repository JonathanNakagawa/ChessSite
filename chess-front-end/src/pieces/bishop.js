import Piece from './piece.js'

export default class Bishop extends Piece {
    constructor(player) {
        super(player, (player === 1? "../images/Bishop_White.png" : "../images/Bishop_Black.png"));
    }

    isPossibleMove(srcX, srcY, destX, destY) {
        diffX = Math.abs(srcX - destX);
        diffY = Math.abs(srcY - destY);
        return(diffX === diffY);
    }
}
