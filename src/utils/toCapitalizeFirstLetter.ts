const toCapitalizeFirstLetter = (word: string) => {
  if (word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  return null

}

export default toCapitalizeFirstLetter
