import Piece from './piece.js'

export default class King extends Piece {
    constructor(player) {
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
    }

    isPossibleMove(srcX, srcY, destX, destY) {
        var diffX = Math.abs(srcX - destX);
        var diffY = Math.abs(srcY - destY);
        return(diffX <= 1 && diffY <= 1);
    }
}
