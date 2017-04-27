import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe( 'mergeSort()', () => {

  it( 'should be a function', () => {
    expect( mergeSort ).to.be.a( 'function' )
  })

  it( 'should return the correct sorted array', () => {
    const a = [1, 3, 5, 4, 2, 6]
    const b = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
    expect( mergeSort( a ) ).to.eql( [1, 2, 3, 4, 5, 6] )
    expect( mergeSort( b ) ).to.eql( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )
  })

  it( 'should throw an error when the input is invalid', () => {
    expect( () => { mergeSort( 'monkey' ) }).to.throw( 'invalid input' )
    expect( () => { mergeSort( 12 ) }).to.throw( 'invalid input' )
  })

})
