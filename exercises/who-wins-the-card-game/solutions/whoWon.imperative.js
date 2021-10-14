/* eslint-disable no-param-reassign */
function whoWon(players, extraCard, extraTakers) {
  const aces = ['A', 'K', 'Q', 'J'];

  if (aces.includes(extraCard)) {
    extraCard = 10;
  }

  const arrayPlayers = Object.entries(players);

  extraTakers.forEach((name) => {
    arrayPlayers.forEach((player) => {
      if (player[0] === name) {
        player[1] = player[1].concat(', ', extraCard);
      }
    });
  });

  arrayPlayers.forEach((player) => {
    let score = 0;

    const arrayScore = player[1].split(', ');

    arrayScore.forEach((value) => {
      if (aces.includes(value)) {
        score += 10;
      } else {
        score += Number(value);
      }
    });

    player[1] = score;
  });
  arrayPlayers.sort((a, b) => {
    if (a[1] < b[1] || a[1] > 21 || (a[0] > b[0] && a[1] === b[1])) return 1;

    if (21 - a[1] < 21 - b[1]) return -1;

    return 0;
  });

  return arrayPlayers;
}
