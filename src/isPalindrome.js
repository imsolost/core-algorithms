export default function isPalindrome(string) {
  let reversedString = string
    .replace(/[^A-Z0-9]/ig, "")
    .toLowerCase()
    .split('')
    .reverse()
    .join('')

  let modifiedString = string
    .replace(/[^A-Z0-9]/ig, "")
    .toLowerCase()

  if (modifiedString === reversedString) {
    return true
  }
  return false
}
