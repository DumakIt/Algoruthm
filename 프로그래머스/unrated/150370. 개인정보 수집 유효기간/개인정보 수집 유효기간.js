function solution(today, terms, privacies) {
  const termsObj = {}
  const todayDate = new Date(today.split(".").join("-"))
  let result = []

  terms.forEach((el)=>{
    const splitTerm = el.split(" ")
    termsObj[splitTerm[0]] = splitTerm[1]
  })

  privacies.forEach((el, idx)=>{
    const splitPrivacies = el.split(" ")
    const date = new Date(splitPrivacies[0].split(".").join("-"))
    date.setMonth(date.getMonth() + Number(termsObj[splitPrivacies[1]]))

    if (Math.sign(todayDate - date) !== -1) {
      result.push(idx + 1)
    }
  })
  return result
}
