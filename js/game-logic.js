// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
        return;
    }

    if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
        return;
    }

    if (!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)) {
        return;
    }

    if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return;
    }
}

// Helper function 'isValidMoveType()' with parameter 'moveType' to validate value to 'rock', 'paper', 'scissors';
function isValidMoveType(moveType) {
    return (moveType === 'rock') || (moveType === 'scissors') || (moveType === 'paper');
}

// Helper function 'isValidMoveValue()' accepts argument of 'moveValue' and checks that it is '>= 1' and '<= 99'
function isValidMoveValue(moveValue) {
    return (moveValue >= 1) && (moveValue <= 99);
}



const getRoundWinner = () => {
    
}

const getGameWinner = () => {

}