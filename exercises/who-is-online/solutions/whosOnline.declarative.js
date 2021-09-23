function getLastStatus({ status, lastActivity }) {
  return status === 'online' && lastActivity > 10 ? 'away' : status;
}

function whosOnline(friends) {
  return friends.reduce((acc, friend) => {
    const status = getLastStatus(friend);
    return {
      ...acc,
      [status]: (acc[status] || []).concat(friend.username),
    };
  }, {});
}
