/**
 * tabbr UI 插件
 * by 梦兮Q
 * version：1.0
**/

export class Tabbar{
  //slecectd:css选择器，拿到tabbar根元素
  // config:配置信息
  constructor(selected,config) {
    this.dom_tabbar = document.querySelector(selected);
    this.dom_tabbar_options = document.querySelectorAll('.option');
    this.dom_tabbar_line = [];
    //设置tabbr_line的宽度为每个li的宽度
    this.line_width = this.dom_tabbar_options[0].offsetWidth;
    this.dom_hover_lines = [];
    //
    this.current_active = 0;
    this.current_line_postion = 0;
    //
    this.config = config;
  }
  init(){
    if (this.dom_tabbar != null){
      //是否启用tabb_line
      if (this.config.tabbr_line === true)
      {
        //添加tabbr_line dom元素
        // console.log(this.dom_tabbar);
        let tabbr_line_txt = '<div class="tabbar_line"></div>';
        this.dom_tabbar.appendChild(this.parseDom(tabbr_line_txt));
        this.dom_tabbar_line = document.querySelector('.tabbar_line');
        //
        this.setLineWidth();

      }
      //是否启用hover_line
      if (this.config.hover_line === true){
        this.hoverOption();
      }

      this.setCurrentAcitve();
      this.setClick();
    }else {
      console.log('你选择的dom不存在！');
    }



  }
  //设置点击事件
  setClick(){
    for (let i = 0;i < this.dom_tabbar_options.length;i++){
      let index = i;
      this.dom_tabbar_options[i].onclick =(e) => {
        this.clearAcitve();
        this.current_active = index;
        this.setCurrentAcitve();
      }
    }
  }
  //清除当前的活动样式
  clearAcitve(){
    this.dom_tabbar_options[this.current_active].classList.remove('option_active');
  }
  //设置当前的活动样式
  setCurrentAcitve(){
    this.dom_tabbar_options[this.current_active].classList.add('option_active');
    //移动tabbar_line
    if (this.config.tabbr_line === true) {
      this.movLine();
      this.dom_tabbar_line.style.left = this.current_line_postion;
    }

  }
  //移动tabbar_line
  movLine(){
    let line_postion  = this.current_active * this.line_width;
    this.current_line_postion = line_postion;
    this.dom_tabbar_line.style.left = this.current_line_postion + 'px';
  }
  //设置hover效果
  hoverOption(){
    let dom_txt = '<div class="hover_line"></div>';

    this.dom_tabbar_options.forEach((item,index) =>{
      //先把生成的一个dom添加到  this.dom_hover_lines中
      this.dom_hover_lines.push(this.parseDom(dom_txt)) ;
      //给每一个option里都添加一个hover_line dom（从this.dom_hover_lines拿出）
      item.appendChild(this.dom_hover_lines[index]);
      item.onmouseover = () =>{
        this.dom_hover_lines[index].style.width = this.getOptionWidth() + 'px';
      }
      item.onmouseleave = () =>{
        this.dom_hover_lines[index].style.width = 0 + 'px';
      }
    })
  }
  getOptionWidth(){
    return this.dom_tabbar_options[0].offsetWidth;
    // this.dom_tabbar_options[0].style.width = '10px';
    // console.log(this.dom_tabbar_options[0].offsetWidth);
  }
  setLineWidth(){
    let option_width = this.getOptionWidth();
    this.dom_tabbar_line.style.width = option_width +'px';
  }
  parseDom(str){
    let parent_dom = document.createElement("div");
    parent_dom.innerHTML = str;
    return parent_dom.childNodes[0];
  }
}