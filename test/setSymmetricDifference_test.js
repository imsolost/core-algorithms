import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe( 'setSymmetricDifference()', () => {

  it( 'should be a function', () => {
    expect( setSymmetricDifference ).to.be.a( 'function' )
  })

  it( 'should return symmetric difference of the two sets', () => {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    const c = [0, 2, 5, 7]
    expect( setSymmetricDifference( a, b ) ).to.eql( [1, 3, 6, 8] )
    expect( setSymmetricDifference( b, c ) ).to.eql( [4, 6, 8, 0, 5, 7] )
  })

  it( 'should throw an error when the input is invalid', () => {
    expect( () => { setSymmetricDifference( 'monkey', 12 ) }).to.throw( 'invalid input' )
    expect( () => { setSymmetricDifference( [1, 2, 3], 123 ) }).to.throw( 'invalid input' )
  })

})
