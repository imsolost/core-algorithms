import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe('setIntersection()', function(){

  it('should be a function', function(){
    expect(setIntersection).to.be.a('function')
  })

  it('should return the correct array', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    const c = [0, 2, 5, 7]
    expect( setIntersection( a, b ) ).to.eql([2, 4])
    expect( setIntersection( b, c ) ).to.eql([2])
  })

  it('should return a string if an invalid number is given', function(){
    expect( setIntersection( 'monkey', 12 ) ).to.equal('invalid input')
    expect( setIntersection( [1, 2, 3], 123 ) ).to.equal('invalid input')
  })

})
