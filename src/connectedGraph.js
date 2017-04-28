export default function connectedGraph( graph ) {
  if ( graph.constructor === Array || graph.constructor !== Object ) {
    throw new Error( 'invalid input' )
  }

  const nodes = Object.keys( graph )
  const node = nodes[0]
  const alreadyVisited = []

  const recursion = vertex => {
    if ( !alreadyVisited.includes( vertex ) ) {
      const destinations = graph[vertex]
      alreadyVisited.push( vertex )
      for ( const e of destinations ) {
        recursion( e )
      }
    }
  }

  recursion( node )

  for ( const node2 of nodes ) {
    if ( !alreadyVisited.includes( node2 ) ) {
      return false
    }
  }
  return true
}
