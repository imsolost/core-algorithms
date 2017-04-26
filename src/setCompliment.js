export default function setCompliment(arr1, arr2) {

  if ( ! Array.isArray(arr1) || ! Array.isArray(arr2) ) {
    throw new Error( 'invalid input' )
  }

  return arr2.filter( value => !arr1.includes(value) )
}
