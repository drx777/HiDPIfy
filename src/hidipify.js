var j = document.createElement('script');
j.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js');
document.getElementsByTagName('body')[0].appendChild(j);

void(j);

$("img").each(function() { 
  var halfwidth = this.width / 2; 
  var halfheight = this.height / 2; 
  $(this).css("width", halfwidth); 
  $(this).css("height", halfheight); 
  this.width = halfwidth; 
  this.height = halfheight
});