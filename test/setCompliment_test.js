import { expect } from 'chai'
import setCompliment from '../src/setCompliment'

describe('setCompliment()', function(){

  it('should be a function', function(){
    expect(setCompliment).to.be.a('function')
  })

  it('should return the correct array', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    const c = [0, 2, 5, 7]
    expect( setCompliment( a, b ) ).to.eql([6, 8])
    expect( setCompliment( b, c ) ).to.eql([0, 5, 7])
  })

  it('should throw an error when the input is invalid', function(){
    expect( () => { setCompliment( 'monkey', 12 ) } ).to.throw('invalid input')
    expect( () => { setCompliment( [1, 2, 3], 123 ) } ).to.throw('invalid input')
  })

})
