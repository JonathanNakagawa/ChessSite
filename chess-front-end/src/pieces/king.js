import Piece from './piece.js'

export default class King extends Piece {
    constructor(player) {
        super(player, (player === 1? "../images/King_White.png" : "../images/King_Black.png"));
    }

    isPossibleMove(srcX, srcY, destX, destY) {
        diffX = Math.abs(srcX - destX);
        diffY = Math.abs(srcY - destY);
        return(diffX <= 1 && diffY <= 1);
    }
}
