function getFormattedDate(date) {
  const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  return months[date.getMonth()] + ` ${date.getDate()}, ${date.getFullYear()}`
}

function getDatesFrom(str) {
  const regExp = /\b(([0-2]?[1-9])|(3[0-2]))\/(0?[1-9]|(10)|(11)|(12))\/-?[0-9]+\b/g
  const datesArray = str.match(regExp)

  return datesArray ? datesArray.join(', ') : ''
}
export {getFormattedDate, getDatesFrom}