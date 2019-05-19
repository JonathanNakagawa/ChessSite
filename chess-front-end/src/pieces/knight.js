import Piece from './piece.js'

export default class Knight extends Piece {
    constructor(player) {
        super(player, (player === 1? "../images/Knight_White.png" : "../images/Knight_Black.png"));
    }

    isPossibleMove(srcX, srcY, destX, destY) {
        diffX = Math.abs(srcX - destX);
        diffY = Math.abs(srcY - destY);
        return(((diffX === 1) && (diffY === 2)) || ((diffX === 2) && (diffY === 1)));
    }
}
