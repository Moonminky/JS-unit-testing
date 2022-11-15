# About

This is a simple battleship game engine, written in Javascript using BDD (**B**ehaviour **D**riven **D**evelopment).
It is part of a course on Unit Testing and BDD. [LINK](https://www.youtube.com/watch?v=u5cLK1UrFyQ)

### Prerequisites

This project uses Mocha and Chai for unit testing.

- Chai

  ```
  npm install chai --save-dev
  ```

- Mocha

  ```
  npm install --save-dev mocha
  ```

# TOC

- [Mocha](#mocha)
- [PLAYER METHODS](#player-methods)
  - [validateLocation](#player-methods-validatelocation)
  - [validateLocations](#player-methods-validatelocations)
  - [placeShip](#player-methods-placeship)
- [GAME INSTANCE FUNCTIONS](#game-instance-functions)
  - [checkGameStatus](#game-instance-functions-checkgamestatus)
- [checkForShip](#checkforship)
- [damageShip](#damageship)
- [fire](#fire)
  <a name=""></a>

<a name="mocha"></a>

# Mocha

Should run our tests using npm.

```js
expect(true).to.be.ok;
```

<a name="player-methods"></a>

# PLAYER METHODS

<a name="player-methods-validatelocation"></a>

## validateLocation

should confirm valid for unoccupied locations in range.

```js
let location = [0, 0];
let actual = validateLocation(player, location);
expect(actual).to.be.ok;
```

should confirm INvalid for occupied locations in range.

```js
let location = [9, 9];
let actual = validateLocation(player, location);
expect(actual).to.be.false;
```

should confirm INvalid for UNoccupied locations OUT of range.

```js
let locationHigh = [10, 10];
let locationLow = [-1, -1];
expect(validateLocation(player, locationHigh)).to.be.false;
expect(validateLocation(player, locationLow)).to.be.false;
```

<a name="player-methods-validatelocations"></a>

## validateLocations

should correctly report a list of unoccupied locations is valid.

```js
let locations = [
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4]
];
expect(validateLocations(player, locations)).to.be.ok;
```

should correctly report a problem if any location in the list is invalid.

```js
let locations = [
  [1, 1],
  [1, 2],
  [1, 3],
  [10, 10]
];
expect(validateLocations(player, locations)).to.be.false;
locations = [
  [1, 1],
  [1, 2],
  [1, 3],
  [0, 0]
];
expect(validateLocations(player, locations)).to.be.false;
```

<a name="player-methods-placeship"></a>

## placeShip

should update a ship with a valid starting location.

```js
let ship = player.ships[0];
let coordinates = [0, 1];
placeShip(player, ship, coordinates, "horizontal");
let actual = ship.locations;
expect(actual).to.be.ok;
expect(actual).to.have.length(1);
expect(actual[0]).to.deep.equal([0, 1]);
```

should throw an error if no direction is specified.

```js
let ship = player.ships[0];
let coordinates = [0, 1];
let handler = function() {
  placeShip(player, ship, coordinates);
};
expect(handler).to.throw(Error);
expect(handler).to.throw("You left ouf the direction ! I need that for math!");
```
<a name="game-instance-functions"></a>
# GAME INSTANCE FUNCTIONS
<a name="game-instance-functions-checkgamestatus"></a>
## checkGameStatus
should tell me when the game is over.

```js
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
```

<a name="checkforship"></a>

# checkForShip

should correctly report no ship at a given players coordinate.

```js
expect(checkForShip(player, [9, 9])).to.be.false;
```

should correctly report a ship at a given players coordinate.

```js
expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
```

should handle ships located at more than one coordinate.

```js
expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
expect(checkForShip(player, [9, 9])).to.be.false;
```

should handle checking multiple ships.

```js
expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);
expect(checkForShip(player, [2, 2])).to.deep.equal(player.ships[2]);
expect(checkForShip(player, [9, 9])).to.be.false;
```

<a name="damageship"></a>

# damageShip

should register damage on a given ship at a given location.

```js
let ship = {
  locations: [[0, 0]],
  damage: []
};
damageShip(ship, [0, 0]);
expect(ship.damage).to.not.be.empty;
expect(ship.damage[0]).to.deep.equal([0, 0]);
```

<a name="fire"></a>

# fire

should record damage on the given players ship at a given coordinate.

```js
fire(player, [0, 0]);
expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
```

should NOT record damage if there's no ship at given coordinate.

```js
fire(player, [9, 9]);
expect(player.ships[0].damage).to.be.empty;
```
