function checkForShip(player, coordinates) {
  let shipPresent, ship;

  for (let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];

    shipPresent = ship.locations.filter(function(actualCoordinate) {
      return (
        (actualCoordinate[0] === coordinates[0]) &&
        (actualCoordinate[i] === coordinates[i])
      );
    })[0];

    if (shipPresent) {
        return true;
    }
  }
  return false;
}

module.exports.checkForShip = checkForShip;