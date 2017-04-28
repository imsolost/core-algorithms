export default function closestPair( points ) {
  const object = { pair: [], distance: 0 }
  let minDist = Infinity

  if ( !Array.isArray( points ) || !Array.isArray( points[0] ) ) {
    throw new Error( 'invalid input' )
  }

  const distance = ( arr1, arr2 ) => Math.hypot( arr1[0] - arr2[0], arr1[1] - arr2[1] )


  for ( let i = 0; i < points.length; i++ ) {
    for ( let j = i + 1; j < points.length; j++ ) {
      if ( distance( points[i], points[j] ) < minDist ) {
        minDist = distance( points[i], points[j] )
        object.pair = [points[i], points[j]]
        object.distance = minDist
      }
    }
  }
  return object
}
