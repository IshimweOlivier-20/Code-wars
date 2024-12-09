function whoseMove(lastPlayer, win) {
    if (win) {
        return lastPlayer;
    } else {
    
        return lastPlayer === "white" ? "black" : "white";
    }
}
