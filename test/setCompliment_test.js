import { expect } from 'chai'
import setCompliment from '../src/setCompliment'

describe( 'setCompliment()', () => {

  it( 'should be a function', () => {
    expect( setCompliment ).to.be.a( 'function' )
  })

  it( 'should show the items in the second set that are not the first set', () => {
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    const c = [0, 2, 5, 7]
    expect( setCompliment( a, b ) ).to.eql( [6, 8] )
    expect( setCompliment( b, c ) ).to.eql( [0, 5, 7] )
  })

  it( 'should return an empty array if there are no matches', () => {
    const a = ['fluffy', 'cat', 'bunny']
    const b = ['fluffy', 'cat']
    expect( setCompliment( a, b ) ).to.eql( [] )
  })

  it( 'should throw an error when the input is invalid', () => {
    expect( () => { setCompliment( 'monkey', 12 ) }).to.throw( 'invalid input' )
    expect( () => { setCompliment( [1, 2, 3], 123 ) }).to.throw( 'invalid input' )
  })

})
