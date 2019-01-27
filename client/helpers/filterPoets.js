import stringSimilarity from 'string-similarity'

const unifyString = (string) => string.trim().toLowerCase()

export default (userInp, city, originalPoets) => {
  let newPoets = [...originalPoets]
  const userInput = userInp.trim()

  const unifiedCity = unifyString(city)
  if (
    city &&
    unifiedCity !== 'не выбрано' &&
    unifiedCity !== 'not choosed' &&
    unifiedCity !== 'не вылучана'
  ) {
    newPoets = newPoets.filter((poet) => unifyString(poet.bornCity) === unifyString(city))
  }

  if (userInput.length <= 1) {
    return newPoets
  }

  const matches = stringSimilarity.findBestMatch(userInput, newPoets.map((e) => e.name)).ratings
  return matches
    .map((matchObj) => {
      const poetName = matchObj.target
      if (matchObj.rating > 0) {
        return newPoets.find((e) => unifyString(e.name) === unifyString(poetName))
      }
      return
    })
    .filter((e) => e)
}
