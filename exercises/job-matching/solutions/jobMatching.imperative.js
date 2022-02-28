function match(candidate, job) {
  if (candidate.minSalary === undefined || job.maxSalary === undefined) {
    throw new Error('missing values');
  }
  const element = candidate.minSalary - candidate.minSalary * 0.9;
  if (element <= job.maxSalary) {
    return true;
  }
  return false;
}
