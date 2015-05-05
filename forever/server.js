
console.log('Application successfuly started');
setTimeout(function () {
  console.log('Application will crash now');
  process.exit();
}, 10000)
