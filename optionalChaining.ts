const uData = {
  id: 'uid-001',
  name: 'Trent',
  job: { title: 'CEO', company: 'Twitter' },
};

// console.log(uData.job && uData.job.company) // OG WAY
console.log(uData?.job?.company); // OPTIONAL CHAINING
