function whosOnline(friends) {
  const statuses = {};

  // eslint-disable-next-line no-restricted-syntax
  friends.forEach(({ status, lastActivity, username }) => {
    if (status === 'online' && lastActivity > 10) {
      // eslint-disable-next-line no-param-reassign
      status = 'away';
    }

    if (status in statuses) {
      statuses[status].push(username);
    } else {
      statuses[status] = [username];
    }
  });

  return statuses;
}
