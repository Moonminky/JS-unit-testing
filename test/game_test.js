let expect = require('chai').expect;

describe('GAME INSTANCE FUNCTIONS', function() {
    describe('checkGameStatus', function() {
        let checkGameStatus = require('../game_logic/game_instance.js').checkGameStatus;
        it('should tell me when the game is over', function() {
            let players = [
                {
                    ships: [
                        {
                            locations: [[0,0]],
                            damage: [[0,0]]
                        }
                    ]
                }
            ];
            let actual = checkGameStatus(players);
            expect(actual).to.be.false;
        });
    });
});