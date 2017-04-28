import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe( 'isPalindrome()', () => {

  it( 'should be a function', () => {
    expect( isPalindrome ).to.be.a( 'function' )
  })

  it( 'should return true if the string is a palindrome', () => {
    expect( isPalindrome( 'radar' ) ).to.equal( true )
    expect( isPalindrome( 'A man, a plan, a canal: Panama' ) ).to.equal( true )
  })

  it( 'should return false if the string is not a palindrome', () => {
    expect( isPalindrome( 'apple' ) ).to.equal( false )
    expect( isPalindrome( 'bananas are gross' ) ).to.equal( false )
  })

})
