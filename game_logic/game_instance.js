const fire = require('./ship_methods').fire;

function checkGameStatus(players) {
    return false;
}

function takeTurn(opposingPlayer, createCoordinates) {
    let coordinates = createCoordinates();
    fire(opposingPlayer, coordinates);
    let gameOver = checkGameStatus();
    
    return gameOver;
}

module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn;