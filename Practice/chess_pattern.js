function drawChessBoard(rows, columns){
    let chessBoard = '';
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns;j++){
            if((i+j)%2===0){
                chessBoard += 'o';
            }
            else{
                chessBoard += 'x';
            }
        }
        chessBoard += '\n';
    }
    console.log(chessBoard);
}

drawChessBoard(8,8);