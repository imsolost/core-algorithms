export default function mergeSort(array) {
  let swapped, temp

  if ( ! Array.isArray(array) ) {
    throw new Error( 'invalid input' )
  }

  do {
    swapped = false
    for (let i = 0; i < array.length; i++) {
      if ( array[i] > array[i + 1] ) {
        temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped);

  return array
}
