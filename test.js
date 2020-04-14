const dateformater = require('./dateFormat')

let y = new dateformater.MyDate()
y.addDay(-35, '--')
y.dateFormat(null, 'dmy')
console.log(y.addZero(5))
console.log(y)

console.log(new Date(Date.now()).getTimezoneOffset())
