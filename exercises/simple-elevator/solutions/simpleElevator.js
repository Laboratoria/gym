const floors = [0, 1, 2, 3];

function goto(level, button) {
  if (typeof level !== 'number'
      || typeof button !== 'string'
      || !floors.includes(level)
      || !floors.includes(Number(button))) return 0;
  return Number(button) - level;
}
