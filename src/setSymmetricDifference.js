export default function setSymmetricDifference( arr1, arr2 ) {

  if ( !Array.isArray( arr1 ) || !Array.isArray( arr2 ) ) {
    throw new Error( 'invalid input' )
  }

  const set1 = arr1.filter( value => !arr2.includes( value ) )
  const set2 = arr2.filter( value => !arr1.includes( value ) )

  return set1.concat( set2 )
}
