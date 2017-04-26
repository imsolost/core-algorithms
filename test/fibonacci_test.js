import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('should return the correct array', function(){
    expect( fibonacci( 7 ) ).to.eql([0, 1, 1, 2, 3, 5, 8])
    expect( fibonacci( 5 ) ).to.eql([0, 1, 1, 2, 3])
    expect( fibonacci( 3 ) ).to.eql([0, 1, 1])
    expect( fibonacci( 1 ) ).to.eql([0])
  })

  it('should throw an error when the input is invalid', function(){
    expect( () => { fibonacci( 0 ) } ).to.throw('invalid input')
    expect( () => { fibonacci( 'fifteen' ) } ).to.throw('invalid input')
  })

})
