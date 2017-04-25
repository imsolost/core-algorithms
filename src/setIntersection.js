export default function setIntersection(arr1, arr2) {

  if ( ! Array.isArray(arr1) || ! Array.isArray(arr2) ) {
    return 'invalid input'
  }

  return arr1.filter( value => arr2.includes(value) )
}
