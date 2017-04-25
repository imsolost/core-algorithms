import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('should return the correct total', function(){
    expect( factorial( 5 ) ).to.equal(120)
    expect( factorial( 4 ) ).to.equal(24)
    expect( factorial( 0 ) ).to.equal(1)
  })

})
