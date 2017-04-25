import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('should return an array of length 100', function(){
    let array = fizzBuzz()
    expect(array.length).to.equal(100)
  })

  it('should modify the array at the appropriate values', function(){
    let array = fizzBuzz()
    expect(array[2]).to.equal('Fizz')
    expect(array[4]).to.equal('Buzz')
    expect(array[14]).to.equal('FizzBuzz')
    expect(array[32]).to.equal('Fizz')
    expect(array[49]).to.equal('Buzz')
    expect(array[59]).to.equal('FizzBuzz')
  })
})
