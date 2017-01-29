var qs = require('./querystring')
var cases = [
  '&&',
  '&=&='
]

process.stdout.write('\033c')

cases.forEach(function (str) {
  var out = qs.parse(str)
  console.log(str + ': ', out)
  console.log()
})
