import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', function(){

  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })

  it('should return the correct array', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    const c = [0, 2, 5, 7]
    expect( setUnion( a, b ) ).to.eql([1, 2, 3, 4, 6, 8])
    expect( setUnion( b, c ) ).to.eql([2, 4, 6, 8, 0, 5, 7])
  })

  it('should throw an error when the input is invalid', function(){
    expect( () => { setUnion( 'monkey', 12 ) } ).to.throw('invalid input')
    expect( () => { setUnion( [1, 2, 3], 123 ) } ).to.throw('invalid input')
  })

})
