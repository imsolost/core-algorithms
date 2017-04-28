import { expect } from 'chai'
import closestPair from '../src/closestPair'

describe( 'closestPair()', () => {

  it( 'should be a function', () => {
    expect( closestPair ).to.be.a( 'function' )
  })

  it( 'should return the correct sorted array', () => {
    const a = [[2, 1], [4, 0], [-1, 0], [5, 3], [-2, 5], [3, -3], [-2, 0], [3, 4], [5, -4], [0, -2]]
    expect( closestPair( a ) ).to.eql({ pair: [[-1, 0], [-2, 0]], distance: 1 })
  })

  it( 'should throw an error when the input is invalid', () => {
    expect( () => { closestPair( 'monkey', 'camel' ) }).to.throw( 'invalid input' )
    expect( () => { closestPair( 12 ) }).to.throw( 'invalid input' )
    expect( () => { closestPair( [12, 13, 15] ) }).to.throw( 'invalid input' )
  })

})
