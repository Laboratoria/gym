const match = (candidate, job) => {
  if (!candidate.minSalary || !job.maxSalary) {
    throw new Error('missing values');
  }
  return job.maxSalary >= candidate.minSalary * 0.1;
};
