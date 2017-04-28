import { expect } from 'chai'
import factorial from '../src/factorial'

describe( 'factorial()', () => {

  it( 'should be a function', () => {
    expect( factorial ).to.be.a( 'function' )
  })

  it( 'should return the correct total: 120', () => {
    expect( factorial( 5 ) ).to.equal( 120 )
  })

  it( 'should return the correct total: 24', () => {
    expect( factorial( 4 ) ).to.equal( 24 )
  })

  it( 'should return the correct total: 1', () => {
    expect( factorial( 0 ) ).to.equal( 1 )
  })

})
