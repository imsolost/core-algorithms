import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe( 'binarySearch()', () => {

  it( 'should be a function', () => {
    expect( binarySearch ).to.be.a( 'function' )
  })

  it( 'should return the correct index of the array', () => {
    const a = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    expect( binarySearch( a, 45 ) ).to.equal( 8 )
  })

  it( 'should return the correct index of the array', () => {
    const b = [10, 4, 2, 8, 6]
    expect( binarySearch( b, 6 ) ).to.equal( 2 )
  })

  it( 'should return "not found" if target is not found', () => {
    const a = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    const b = [2, 4, 6, 8, 10]
    expect( binarySearch( a, 65 ) ).to.equal( 'not found' )
    expect( binarySearch( b, 7 ) ).to.equal( 'not found' )
  })

  it( 'should return "invalid input" if an input is invalid', () => {
    expect( binarySearch( 'monkey', 12 ) ).to.equal( 'invalid input' )
    expect( binarySearch( [1, 2, 3], [1, 2, 3] ) ).to.equal( 'invalid input' )
  })

})
