export default function fibonacci( number ) {
  let array = []

  if ( number <= 0 || number % 1 !== 0 ) {
    throw new Error( 'invalid input' )
  }

  function fib( num ) {
    if ( num === 1 ) {
      return 0
    }
    if ( num === 2 ) {
      return 1
    }
    return fib( num - 1 ) + fib( num - 2 )
  }

  for ( let i = number; i > 0; i -= 1 ) {
    array.push( fib( number ) )
    number -= 1
  }

  return array.reverse()
}
