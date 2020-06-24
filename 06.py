import re
print(re.findall('\n', '\\n\n\\'))
# ['\n']  # 找到了换行符
print(re.findall('\\n', '\\n\n\\'))
# ['\n']  # 找到了换行符
print(re.findall('\\\n', '\\n\n\\'))
# ['\n']  # 找到了换行符
print(re.findall('\\\\n', '\\n\n\\'))
# ['\\n'] # 找到了反斜杠和字母n
