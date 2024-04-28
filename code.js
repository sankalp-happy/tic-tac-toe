function response(board, bool) {
    class Position {
        constructor(isXnext, board) {
            this.isXnext = isXnext;
            this.board = board;
            this.checkWin();
            this.generateChildren();
        }
        chidren = [];
        isWin = false;
        isDraw = false;
        winTeam = null;
        gameOver = () => {
            this.isWin = true;
            this.winTeam = this.isXnext ? -1 : 1;
        }
        checkWin = () => {
            const winPattern = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            for (var i = 0; i < winPattern.length; i++) {
                let [a, b, c] = winPattern[i];
                if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                    this.gameOver();
                    return;
                }
            }
            if (!(this.board.includes(null))) {
                this.isDraw = true;
                this.winTeam = 0;
            }
        }
    
        generateChildren = () => {
            if (this.isWin ) {return};
            for (var i = 0; i < 9; i++) {
                if (this.board[i] == null) {
                    let newBoard = this.board.slice();
                    newBoard[i] = this.isXnext?'X':'O';
                    let newPosition = new Position(!this.isXnext, newBoard);
                    this.chidren.push(newPosition);
                }
            }
        }
    }
    
    
    
    
    function minmax(posi) {
        if (posi.isWin || posi.isDraw) {
            posi.eval = posi.winTeam;
            return posi.winTeam
        }
        if(posi.isXnext) {
            let Eval = -Infinity
            for (var i = 0; i < posi.chidren.length; i++) {
                let newEval = minmax(posi.chidren[i], !posi.isXnext);
                Eval = (Eval > newEval)? Eval : newEval;
            }
            posi.eval = Eval;
            return Eval;
        } else {
            let Eval = Infinity
            for (var i = 0; i < posi.chidren.length; i++) {
                let newEval = minmax(posi.chidren[i], !posi.isXnext);
                Eval = (Eval < newEval)? Eval : newEval;
            }
            posi.eval = Eval;
            return Eval;
        }
    }

    var posi = new Position(bool, board)
    var Eval = minmax(posi);
    for (var i = 0; i < posi.chidren.length; i++) {
        if (posi.chidren[i].eval == Eval) {
            return posi.chidren[i].board;
        }
    }
}
