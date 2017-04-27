export default function setIntersection( arr1, arr2 ) {

  if ( !Array.isArray( arr1 ) || !Array.isArray( arr2 ) ) {
    throw new Error( 'invalid input' )
  }

  return arr1.filter( value => arr2.includes( value ) )
}
