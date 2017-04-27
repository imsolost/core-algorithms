export default function isPalindrome( string ) {
  const reversedString = string
    .replace( /[^A-Z0-9]/ig, '' )
    .toLowerCase()
    .split( '' )
    .reverse()
    .join( '' )

  const modifiedString = string
    .replace( /[^A-Z0-9]/ig, '' )
    .toLowerCase()

  if ( modifiedString === reversedString ) {
    return true
  }
  return false
}
