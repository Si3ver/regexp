let str = `we found "the little cat" is in the hat, we like "the little cat"`
let re = new RegExp(/"[^"]+"|\w+/, 'g')
let res = str.match(re)
console.log(res)

