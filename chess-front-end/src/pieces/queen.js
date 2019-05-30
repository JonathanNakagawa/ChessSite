import Piece from './piece.js'

export default class Queen extends Piece {
    constructor(player) {
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"));
    }

    isPossibleMove(srcX, srcY, destX, destY) {
        var diffX = Math.abs(srcX - destX);
        var diffY = Math.abs(srcY - destY);
        var eqX = srcX === destX;
        var eqY = srcY === destY;
        return(((eqX || eqY) && !(eqX && eqY)) || (diffX === diffY));
    }
}
