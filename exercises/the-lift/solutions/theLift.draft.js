let lift;

function setupLift() {
  lift = {
    current: 0,
    users: [],
    history: [0],
    dir: 'up',
  };
}

function move(floor) {
  if (floor === lift.current) return;
  lift.history.push(floor);
  lift.current = floor;
}

function waiting(queues) {
  let people = 0;
  for (const floor of queues) {
    people += floor.length;
  }
  return people;
}

function beSmart(queues) {
  let optimal;
  if (lift.dir === 'up') {
    for (let l = lift.current + 1; l < queues.length; l++) {
      for (person of queues[l]) {
        if (person > l) return l;
        if (person < l) optimal = l;
      }
    }
  }
  return optimal;
}

function checkDirection(queues) {
  if (lift.dir === 'up') {
    let toPickup = 0;
    for (let l = lift.current + 1; l < queues.length; l++) {
      toPickup += queues[l].length;
    }
    let toDrop = 0;
    for (const person of lift.users) {
      if (person > lift.current) {
        toDrop++;
      }
    }
    if (toDrop + toPickup === 0) {
      lift.dir = 'down';
    }
  }
  if (lift.dir === 'down') {
    let toPickup = 0;
    for (let l = lift.current - 1; l > 0; l--) {
      toPickup += queues[l].length;
    }
    let toDrop = 0;
    for (const person of lift.users) {
      if (person < lift.current) {
        toDrop++;
      }
    }
    if (toDrop + toPickup === 0) {
      lift.dir = 'up';
    }
  }
}

function next(queues) {
  checkDirection(queues);
  if (lift.users.length === 0) return beSmart(queues);
  if (lift.dir === 'up') {
    for (let l = lift.current + 1; l < queues.length; l++) {
      if (queues[l].length > 0) {
        return l;
      }
      if (lift.users.includes(l)) {
        return l;
      }
    }
  }
  if (lift.dir === 'down') {
    for (let l = lift.current - 1; l > 0; l--) {
      if (queues[l].length > 0) {
        return l;
      }
      if (lift.users.includes(l)) {
        return l;
      }
    }
  }
  return 0;
}

function load(queue, capacity) {
  for (person of [...queue]) {
    if (lift.users.length < capacity) {
      lift.users.push(person);
      queue.pop(queue.indexOf(person));
    }
  }
}

function unload() {
  lift.users = lift.users.filter(
    (floor) => floor !== lift.current,
  );
}

const theLift = function (queues, capacity) {
  setupLift();
  // mientras [haya gente esperando]
  while (waiting(queues) > 0
         || lift.users.length > 0) {
    // escoger próximo piso
    const target = next(queues);
    // descargar ocupantes
    unload();
    // cargar ocupantes
    load(queues[target], capacity);
    // mover el ascensor
    move(target);
  }
  return lift.history;
};
