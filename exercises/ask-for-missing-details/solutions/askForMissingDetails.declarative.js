function askForMissingDetails(list) {
  const devsMissingDetails = list.filter((dev) => {
    return Object.keys(dev).some((key) => dev[key] === null);
  });

  const askMissingDetails = devsMissingDetails.map((dev) => {
    const propertyNull = Object.keys(dev).find((key) => dev[key] === null);
    dev.question = `Hi, could you please provide your ${propertyNull}.`;
    return dev;
  });

  return askMissingDetails;
}
