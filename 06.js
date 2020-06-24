// 原字符串中，共包含四个字符，第一个字符是 \，第二个是字母n，第三个是换行符，第四个是 \。
// 四个正则表达式的构造字符串中，第一个是换行符（正则转义后保持不变，仍然是换行符），第二个是\和n字母（正则转义后是换行符），第三个是\和换行符（正则转义后，单个换行符无意义，只剩下换行符），第四个是\\和换行符（正则转义后为一个斜杠和一个换行符）。

// 前三个都是找到了换行处，第四个找到了换行符。
// 测试JavaScript代码：

const str = '\\n\n\\'
const sources = ['\n', '\\n', '\\\n', '\\\\n']
const regs = []

sources.forEach(s => regs.push(new RegExp(s, 'g')))
regs.forEach(reg => {
  console.log('[current reg] ', reg)
  let once_match = reg.exec(str)
  console.log('[result]', once_match)
})

