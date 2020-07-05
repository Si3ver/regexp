
# sort words.txt | uniq -c
# 如果想取前10名，可以继续对结果排序
# sort words.txt | uniq -c | sort -nrk1 | head -n10
# 至于为什么要加 n、r 和 k1 你可以通过 man sort 看一下说明

ggrep -Po '[\w\.][\w\.\,\-]*\b' 09.words.txt | sort | uniq -c | sort -nr > 09.cnts.txt
# ggrep -Po '[^\d\,]+' 09.words.txt | sort | uniq -c | sort -nr > 09.cnts.txt
