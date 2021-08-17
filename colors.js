
  function switchNightDay(self) {
    var body_style=document.querySelector('body').style;
    var allLink=document.querySelectorAll('a');
    var link_color;
    if(self.value ==='Night') {
      body_style.backgroundColor ='black';
      body_style.color ='#bbbbbb';
      link_color='gray';
      self.value='Day';
    }
    else {
      body_style.backgroundColor ='white';
      body_style.color ='black';
      link_color='black';
      self.value='Night';
    }
    for(var i=0;i<allLink.length;i++) {
      allLink[i].style.color=link_color;
    }
    document.querySelector('.now').style.color ='#bbbbbb';
  }
// DEBUG:
