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

module.exports = deepClone

