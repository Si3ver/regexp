// 作业题答案： \b(\w+)(\s\1)+\b
let str = 'the little cat cat cat2 is in the hat hat hat2, we like it'

console.log(str)
console.log(str.replace(/(\w+)(\s\1)+/g, '$1'))
console.log(str.replace(/\b(\w+)(\s\1)+\b/g, '$1'))
console.log(str.replace(/(?<=\W)(\w+)(\s\1)+(?=\W)/g, '$1'))
