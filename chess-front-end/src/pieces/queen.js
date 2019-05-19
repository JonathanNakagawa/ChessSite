import Piece from './piece.js'

export default class Queen extends Piece {
    constructor(player) {
        super(player, (player === 1? "../images/Queen_White.png" : "../images/Queen_Black.png"));
    }

    isPossibleMove(srcX, srcY, destX, destY) {
        diffX = Math.abs(srcX - destX);
        diffY = Math.abs(srcY - destY);
        eqX = srcX === destX;
        eqY = srcY === destY;
        return(((eqX || eqY) && !(eqX && eqY)) || (diffX === diffY));
    }
}
