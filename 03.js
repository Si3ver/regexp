console.log(`the little cat cat is in the hat hat hat, we like it.`.replace(/(\w+)(\s\1)+/g, '$1'))
console.log(`the little cat cat is in the hat hat hat, we like it.`.replace(/(\w+)(\s$1)+/g, '$1'))
