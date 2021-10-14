function whoWon(players, extraCard, extraTakers) {
  return Object.entries(players)
    .map((player) => {
      const cards = player[1].split(', ').map((value) => Number(value) || 10);
      let score = cards[0] + cards[1];

      if (extraTakers.includes(player[0])) {
        score += Number(extraCard) ? Number(extraCard) : 10;
      }
      return [player[0], score];
    })
    .sort((a, b) => {
      if (a[1] < b[1] || a[1] > 21 || (a[0] > b[0] && a[1] === b[1])) return 1;

      if (21 - a[1] < 21 - b[1]) return -1;

      return 0;
    });
}
