function askForMissingDetails(list) {
    return list.filter(function(dev) {

      for(var key in dev) {
        if (dev[key] === null) {
          dev['question'] = `Hi, could you please provide your ${key}.`;
          return dev;
        }
      }

    });
}
