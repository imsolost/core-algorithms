export default function collatzConjecture(number) {
  let array = []

  if (number <= 0 || number % 1 !== 0) {
    return 'invalid input'
  }

  while (number !== 1) {
    if (number % 2 === 0) {
      array.push(number)
      number /= 2
    }
    else {
      array.push(number)
      number = number * 3 + 1
    }
  }

  if (number === 1) {
    array.push(number)
    return array
  }

  return array
}
