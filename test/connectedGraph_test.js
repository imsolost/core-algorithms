import { expect } from 'chai'
import connectedGraph from '../src/connectedGraph'

describe( 'connectedGraph()', () => {

  it( 'should be a function', () => {
    expect( connectedGraph ).to.be.a( 'function' )
  })

  it( 'should return the correct sorted array', () => {
    const a = {
      a: ['b', 'c'],
      b: ['a', 'd'],
      c: ['a', 'd'],
      d: ['b', 'c'],
    }
    expect( connectedGraph( a ) ).to.equal( true )
  })

  it( 'should throw an error when the input is invalid', () => {
    expect( () => { connectedGraph( 'monkey', 'camel' ) }).to.throw( 'invalid input' )
    expect( () => { connectedGraph( 12 ) }).to.throw( 'invalid input' )
    expect( () => { connectedGraph( [12, 13, 15] ) }).to.throw( 'invalid input' )
  })

})
