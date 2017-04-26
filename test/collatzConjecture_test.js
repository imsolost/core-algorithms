import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe('collatzConjecture()', function(){

  it('should be a function', function(){
    expect(collatzConjecture).to.be.a('function')
  })

  it('should return the correct array', function(){
    expect( collatzConjecture( 7 ) ).to.eql([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
    expect( collatzConjecture( 5 ) ).to.eql([5, 16, 8, 4, 2, 1])
    expect( collatzConjecture( 3 ) ).to.eql([3, 10, 5, 16, 8, 4, 2, 1])
    expect( collatzConjecture( 1 ) ).to.eql([1])
  })

  it('should return a string if an invalid number is given', function(){
    expect( () => { collatzConjecture( 0 ) } ).to.throw('invalid input')
    expect( () => { collatzConjecture( 'fifteen' ) } ).to.throw('invalid input')
  })

})
