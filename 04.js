let str = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="keywords" content=后端,架构,前端,移动,人工智能,大数据,产品,运营,运维,测试,极客时间,极客邦 id="metakeywords">
    <meta name="description" content= id="metadesc">
    <link rel="apple-touch-icon" sizes="180x180" href="//static001.geekbang.org/static/time/icon/apple-touch-icon.jpg">
    <link rel="icon" type="image/png" sizes="32x32" href="//static001.geekbang.org/static/time/icon/favicon-32x32.jpg">
    <link rel="icon" type="image/png" sizes="16x16" href="//static001.geekbang.org/static/time/icon/favicon-16x16.jpg">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <meta name="format-detection" content="telephone=no" />
    
    <meta property="og:url" content="https://time.geekbang.org/">
    <meta property="og:type" content="article">
    <meta property="og:title" content="极客时间-轻松学习，高效学习-极客邦">
    <meta property="og:description" content="">
    <meta property="og:image" content="">
    <meta name="applicable-device" content="pc,mobile">
    <meta http-equiv="Cache-Control" content="no-transform"/>
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <link rel="canonical" href="https://time.geekbang.org/" />
    
    <title>极客时间-轻松学习，高效学习-极客邦</title>
    
    <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
    <script type="text/javascript" src="https://g.alicdn.com/dingding/dingtalk-jsapi/2.7.13/dingtalk.open.js"></script>
    <script type="text/javascript" src="//at.alicdn.com/t/font_372689_nw1guejwd2q.js"></script>
    <script type="text/javascript" src="//static001.geekbang.org/static/time/js/katex.f3817a93026e8eaf1793e7b770cf588e.js"></script>
    <script type="text/javascript" src="//static001.geekbang.org/static/time/js/hls.8361666e7e2690d988ff5fe775b62bbe.js"></script>
    
    <script type="text/javascript" src="//g.alicdn.com/de/prismplayer/2.8.2/aliplayer-min.js"></script>
    
    <script type="text/javascript">
      if (!('flex' in document.documentElement.style) && !navigator.userAgent.match(/spider|googlebot|bingbot|geekbang|yahoo! Slurp/i)){
        window.location.href = '//static001.geekbang.org/static/common/browser_update/index.html'
      }
    </script>
    
    <script type="text/javascript">
      if (!('ontouchstart' in window)) {
        window.ontouchstart = 1
      }
    </script>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/javascript" src="/main.js?t=1592909864"></script>
    
    
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-103082599-6', 'auto');
      ga('send', 'pageview');
    </script>
    <script>
      var _hmt = _hmt || [];
      var __gBaiduSiteIdConfig__ = {
          optimize: '59c4ff31a9ee6263811b23eb921a5083',
          time: '022f847c4e3acd44d4a2481d9187f1e6'
      };
      var _hmt = _hmt || [];
      _hmt.push(['_setAccount', __gBaiduSiteIdConfig__.optimize]);
      _hmt.push(['_setAutoPageview', true]);
      _hmt.push(['_setAccount', __gBaiduSiteIdConfig__.time]);
      _hmt.push(['_setAutoPageview', true]);

      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?" + __gBaiduSiteIdConfig__.optimize;
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();

      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?" + __gBaiduSiteIdConfig__.time;
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      (function(){
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https'){
          bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        } else {
          bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
      })();
    </script>
  </body>
</html>
`

console.log(str.match(/<head>.*<\/head>/gsi))
