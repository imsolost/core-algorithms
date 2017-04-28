export default function makeChange({ price, amountGiven }) {
  const change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  }

  if ( typeof price !== 'number' || typeof amountGiven !== 'number' ) {
    throw new Error( 'invalid input' )
  }

  let difference = amountGiven - price

  while ( difference > 24 ) {
    change.quarters++
    difference -= 25
  }

  while ( difference > 9 ) {
    change.dimes++
    difference -= 10
  }

  while ( difference > 4 ) {
    change.nickels++
    difference -= 5
  }

  while ( difference > 0 ) {
    change.pennies++
    difference--
  }

  if ( difference < 0 ) {
    return 'That is not enough money!'
  }
  return change
}
