import {Tabbar} from './Tabbar.js'
window.onload = function () {

  let tabbar = new Tabbar('.tabbar',{
    tabbr_line:true,
    hover_line:true
  });
  tabbar.init()
}