import stringSimilarity from 'string-similarity'

const unifyString = (string) => string.trim().toLowerCase()

export default (userInp, city, originalPoets) => {
  let newPoets = [...originalPoets]
  const userInput = unifyString(userInp)

  const unifiedCity = unifyString(city)
  if (
    city &&
    unifiedCity !== 'не выбрано' &&
    unifiedCity !== 'not choosed' &&
    unifiedCity !== 'не вылучана'
  ) {
    newPoets = newPoets.filter((poet) => unifyString(poet.bornCity) === unifyString(city))
  }

  const regex = new RegExp(`${userInput}`, 'i')
  return newPoets.sort().filter(v => regex.test(unifyString(v.name)))
}
