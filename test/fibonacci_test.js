import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', () => {

  it( 'should be a function', () => {
    expect( fibonacci ).to.be.a( 'function' )
  })

  it( 'should return the correct array', () => {
    expect( fibonacci( 7 ) ).to.eql( [0, 1, 1, 2, 3, 5, 8] )
  })

  it( 'should return the correct array', () => {
    expect( fibonacci( 5 ) ).to.eql( [0, 1, 1, 2, 3] )
  })

  it( 'should return the correct array', () => {
    expect( fibonacci( 3 ) ).to.eql( [0, 1, 1] )
  })

  it( 'should return the correct array', () => {
    expect( fibonacci( 1 ) ).to.eql( [0] )
  })

  it( 'should throw an error when the input is invalid', () => {
    expect( () => { fibonacci( 0 ) }).to.throw( 'invalid input' )
    expect( () => { fibonacci( 'fifteen' ) }).to.throw( 'invalid input' )
  })

})
