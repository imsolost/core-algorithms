import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe( 'setIntersection()', () => {

  it( 'should be a function', () => {
    expect( setIntersection ).to.be.a( 'function' )
  })

  it( 'should return intersection of the two arrays', () => {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    const c = [0, 2, 5, 7]
    const d = [1, 1, 2, 3, 4]
    expect( setIntersection( a, b ) ).to.eql( [2, 4] )
    expect( setIntersection( b, c ) ).to.eql( [2] )
    expect( setIntersection( d, b ) ).to.eql( [2, 4] )
  })

  it( 'should throw an error when the input is invalid', () => {
    expect( () => { setIntersection( 'monkey', 12 ) }).to.throw( 'invalid input' )
    expect( () => { setIntersection( [1, 2, 3], 123 ) }).to.throw( 'invalid input' )
  })

})
