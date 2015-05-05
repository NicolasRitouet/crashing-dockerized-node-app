
console.log('Application successfuly started')
setTimeout( ->
  console.log('Application will crash now')
  process.exit()
, 10000)
