function race(speed1, speed2, distance, sleep, getup) {
  const timeBeforeSleep = sleep / speed1;

  const timeGetUp = (distance - getup) / speed2;

  const timeSleepHore = Math.round(timeGetUp - timeBeforeSleep);

  const timeTortoiseEnds = getup / speed2;

  const timeHareEnds = (distance - sleep) / speed1;

  if (timeHareEnds > timeTortoiseEnds) { return `The tortoise won the race. The hare is sleeping for ${timeSleepHore} minutes.`; }

  if (timeHareEnds < timeTortoiseEnds) { return `The hare won the race. He is sleeping for ${timeSleepHore} minutes.`; }

  return `The hare and the tortoise tied. The hare is sleeping for ${timeSleepHore} minutes.`;
}
