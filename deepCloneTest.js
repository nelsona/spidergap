const deepClone = require('./deepClone')

const testObject = {name: 'Paddy', address: {town: 'Lerum', country: 'Sweden'}}
const testObjectIncludingArray = {name: 'Paddy', address: {town: 'Lerum', country: 'Sweden'}, siblings: ['John']}

const clonedObject = deepClone(testObject)
const clonedObjectIncludingArray = deepClone(testObjectIncludingArray)
console.log('Cloned object', clonedObject)
console.log('Cloned object with an array', clonedObjectIncludingArray)

console.log('Is the original object equal to itself?', testObject === testObject)
console.log('Is the original object equal to the cloned object?', testObject === clonedObject)
console.log('Is the original object with an array equal to itself?', testObjectIncludingArray === testObjectIncludingArray)
console.log('Is the original object with an array equal to the cloned object?', testObjectIncludingArray === clonedObjectIncludingArray)
