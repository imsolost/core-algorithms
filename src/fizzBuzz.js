export default function fizzBuzz() {
  const numArray = [...Array( 100 )].map( ( v, i ) => i + 1 )

  for ( let i = 0; i < numArray.length; i++ ) {
    if ( numArray[i] % 5 === 0 && numArray[i] % 3 === 0 ) {
      numArray[i] = 'FizzBuzz'
    }
    if ( numArray[i] % 5 === 0 ) {
      numArray[i] = 'Buzz'
    }
    if ( numArray[i] % 3 === 0 ) {
      numArray[i] = 'Fizz'
    }
  }

  return numArray
}
