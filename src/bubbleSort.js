export default function bubbleSort( array ) {
  let swapped, temp

  if ( !Array.isArray( array ) ) {
    return 'invalid input'
  }

  do {
    swapped = false
    for ( let i = 0; i < array.length; i += 1 ) {
      if ( array[i] > array[i + 1] ) {
        temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        swapped = true
      }
    }
  } while ( swapped )

  return array
}
