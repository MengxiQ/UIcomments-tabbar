"# 1111" 
"# UIcomments-tabbar" 
# 1. HTML基本模板
````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>导航栏组件</title>
    <link rel="stylesheet" href="Tabbar.css">
</head>
<body>
<ul class="tabbar">
    <li class="option">option1</li>
    <li class="option">option2</li>
    <li class="option">option3</li>
    <li class="option">option4</li>
    <li class="option">option5</li>
    <li class="option">option6</li>
</ul>
<script src="Tabbar.js" type="module"></script>
<script src="main.js" type="module"></script>
</body>
</html>
````
2.js程序入口
````
// 导入类Tabbar类
import {Tabbar} from './Tabbar.js'
window.onload = function () {
  //实例化
  let tabbar = new Tabbar('.UIcomments-tabbar',{
    tabbr_line:true,//是否显示点击状态下的滑块
    hover_line:true//是否显示hover状态下的下的滑块
  });
  tabbar.init()
}
````
