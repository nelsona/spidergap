const testObject = {name: 'Paddy', address: {town: 'Lerum', country: 'Sweden'}}
const testObjectIncludingArray = {name: 'Paddy', address: {town: 'Lerum', country: 'Sweden'}, siblings: ['John']}

const deepClone = (objectToClone) => {
  let clone = {}
  for (let key in objectToClone) {
    let value = objectToClone[key]

    if (typeof value === 'object') {
      clone[key] = deepClone(value)
    }

    if (value instanceof Array) {
      let cloneArray = []
      cloneArray = value.map((item) => {
        return item
      })
      clone[key] = cloneArray
    }

    clone[key] = value
  }
  return clone
}

console.log(deepClone(testObject))
console.log(deepClone(testObjectIncludingArray))

console.log(testObject === testObject)
console.log(testObject === deepClone(testObject))
console.log(testObjectIncludingArray === testObjectIncludingArray)
console.log(testObjectIncludingArray === deepClone(testObjectIncludingArray))
