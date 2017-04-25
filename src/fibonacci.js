export default function fibonacci(number) {
  let array = []

  if (number <= 0 || number % 1 !== 0) {
    return 'invalid input'
  }

  function fib(number) {
    if (number === 1) {
      return 0
    }
    if (number === 2) {
      return 1
    }
    return fib(number - 1) + fib(number - 2)
  }

  for (let i = number; i > 0; i--) {
    array.push( fib(number) )
    number--
  }

  return array.reverse()
}
