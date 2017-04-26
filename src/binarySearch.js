export default function binarySearch(array, target) {
  let l = 0, r = array.length - 1

  if ( ! Array.isArray(array) || typeof(target) !== 'number' ) {
    return 'invalid input'
  }

  array = array.sort( (a, b) => a - b )

  while (l < r) {
    let mid = Math.floor( (l + r) / 2)

    if (array[mid] === target) {
      return mid
    }
    else if (array[mid] < target) {
      l = mid + 1
    }
    else {
      r = mid - 1
    }
  }
  return 'not found'
}
