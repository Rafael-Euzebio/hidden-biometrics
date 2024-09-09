const countByFilter = (array, filter) => {
  const count = {}
  array.forEach((element) => {
    const filteredValue = element[filter]
    if (Object.prototype.hasOwnProperty.call(count, filteredValue)) {
      count[filteredValue]++
    } else {
      count[filteredValue] = 1
    }
  })

  return count
}

module.exports = countByFilter
