export default function mergeSort( array ) {
  if ( !Array.isArray( array ) ) {
    throw new Error( 'invalid input' )
  }

  const recurse = ( arr ) => {
    let left = arr.slice( 0, Math.floor( arr.length / 2 ) )
    let right = arr.slice( Math.floor( arr.length / 2 ), arr.length )

    if ( left.length > 1 ) {
      left = recurse( left )
    }
    if ( right.length > 1 ) {
      right = recurse( right )
    }

    let resultArray = []
    let iIndex = 0
    let jIndex = 0

    while ( iIndex < left.length && jIndex < right.length ) {
      if ( left[iIndex] < right[jIndex] ) {
        resultArray.push( left[iIndex++] )
      } else {
        resultArray.push( right[jIndex++] )
      }
    }

    resultArray = resultArray.concat( left.slice( iIndex ) ).concat( right.slice( jIndex ) )

    return resultArray
  }

  return recurse( array )
}
