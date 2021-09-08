function askForMissingDetails(list) {
  const devsMissingDetails = list.filter(
    (dev) => Object.keys(dev).some((key) => dev[key] === null),
  );

  const askMissingDetails = devsMissingDetails.map((dev) => {
    const propertyNull = Object.keys(dev).find((key) => dev[key] === null);
    // eslint-disable-next-line no-param-reassign
    dev.question = `Hi, could you please provide your ${propertyNull}.`;
    return dev;
  });

  return askMissingDetails;
}
