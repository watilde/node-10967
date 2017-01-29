var qs = require('./querystring')
var cases = [
  /*
  ['a=b&c&d=e', 'a=b&c=&d=e', { a: 'b', c: '', d: 'e' }],
  ['a=b&c=&d=e', 'a=b&c=&d=e', { a: 'b', c: '', d: 'e' }],
  ['a=b&=c&d=e', 'a=b&=c&d=e', { a: 'b', '': 'c', d: 'e' }],
  ['a=b&=&c=d', 'a=b&=&c=d', { a: 'b', '': '', c: 'd' }],
  */
  ['&&&&', '', {}],
  ['&&foo=bar&&', 'foo=bar', { foo: 'bar' }],
  ['&=&=', '=&=', { '': [ '', '' ]}]
  /*
  ['&=&', '=', { '' : '' }],
  */
]

process.stdout.write('\033c')
console.log(new Date() + '\n')

cases.forEach(function (str) {
  var out = qs.parse(str[0])
  console.log(str[0] + ': ', out)
  console.log(str[0] + ': ', str[2])
  console.log('\n')
})
