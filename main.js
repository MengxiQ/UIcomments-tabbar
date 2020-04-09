// 导入类Tabbar类
import {Tabbar} from './Tabbar.js'
window.onload = function () {
  //实例化
  let tabbar = new Tabbar('.tabbar',{
    tabbr_line:true,//是否显示点击状态下的滑块
    hover_line:true//是否显示hover状态下的下的滑块
  });
  tabbar.init()
}