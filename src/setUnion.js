export default function setUnion( arr1, arr2 ) {
  const combinedArray = arr1.concat( arr2 )

  if ( !Array.isArray( arr1 ) || !Array.isArray( arr2 ) ) {
    throw new Error( 'invalid input' )
  }

  return combinedArray.filter( ( value, index, array ) => array.indexOf( value ) === index )

}
