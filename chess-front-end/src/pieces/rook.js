import Piece from './piece.js'

export default class Rook extends Piece {
    constructor(player) {
        super(player, (player === 1? "../images/Rook_White.png" : "../images/Rook_Black.png"));
    }

    isPossibleMove(srcX, srcY, destX, destY) {
        eqX = srcX === destX;
        eqY = srcY === destY;
        return((eqX || eqY) && !(eqX && eqY));
    }
}
