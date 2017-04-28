import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe( 'bubbleSort()', () => {

  it( 'should be a function', () => {
    expect( bubbleSort ).to.be.a( 'function' )
  })

  it( 'should return the correct sorted array', () => {
    const a = [1, 3, 5, 4, 2, 6]
    expect( bubbleSort( a ) ).to.eql( [1, 2, 3, 4, 5, 6] )
  })

  it( 'should return the correct sorted array', () => {
    const b = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
    expect( bubbleSort( b ) ).to.eql( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )
  })

  it( 'should return "invalid input" if an input is invalid', () => {
    expect( bubbleSort( 'monkey' ) ).to.equal( 'invalid input' )
    expect( bubbleSort( 12 ) ).to.equal( 'invalid input' )
  })

})
