var pass = document.getElementById('all');
var k = document.querySelectorAll("#search-creator");
var createname = document.querySelectorAll(".title");
var error = document.getElementById('search-error');
var count = 0;
var scrollPosition = window.scrollY || document.documentElement.scrollTop;
var Newimage = {
  setImage1:function(self, char){
    self.parentNode.getElementsByTagName('div')[0].style.display = char;
  },
  setImage2:function(char,n){
    k[n].style.display = char;
  },
  setImage3:function(char) {
    document.getElementById('plus-image').style.display = char;
  },
  setImage4:function(char) {
    document.getElementById('plus-comment').innerHTML = char;
  }
}

function Park() {
    document.getElementById('q1').style.position = 'fixed';
    document.getElementById('q1').style.width = '100%';
    document.getElementById('q1').style.top = '0';
}
if (scrollPosition > 140){
  Park();
}

function selectImg(number) {
  pass.style.display = "none";
  Newimage.setImage3('none');
  Newimage.setImage4('더 보기');
  if(number == 1){
    pass = document.getElementById('all');
    document.getElementById('p1').src = "http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg";
    document.getElementById('p2').src = "http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg";
    document.getElementById('p3').src = "http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg";
    document.getElementById('p4').src = "http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg";
    document.getElementById('p5').src = "http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg";
    document.getElementById('p6').src = "http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg";
    document.getElementById('p7').src = "http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg";
    document.getElementById('p8').src = "http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg";
  }
  else if(number == 2){
    pass = document.getElementById('game');
    document.getElementById('p1').src = "http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg";
    document.getElementById('p2').src = "http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg";
    document.getElementById('p3').src = "http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg";
    document.getElementById('p4').src = "http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg";
    document.getElementById('p5').src = "http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg";
    document.getElementById('p6').src = "http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg";
    document.getElementById('p7').src = "http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg";
    document.getElementById('p8').src = "http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg";
  }
  else if(number == 3){
    pass = document.getElementById('kids');
    document.getElementById('p1').src = "http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg";
    document.getElementById('p2').src = "http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg";
    document.getElementById('p3').src = "http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg";
    document.getElementById('p4').src = "http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg";
    document.getElementById('p5').src = "http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg";
    document.getElementById('p6').src = "http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg";
    document.getElementById('p7').src = "http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg";
    document.getElementById('p8').src = "http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg";
  }
  else if(number == 4){
    pass = document.getElementById('food');
    document.getElementById('p1').src = "http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg";
    document.getElementById('p2').src = "http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg";
    document.getElementById('p3').src = "http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg";
    document.getElementById('p4').src = "http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg";
    document.getElementById('p5').src = "http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg";
    document.getElementById('p6').src = "http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg";
    document.getElementById('p7').src = "http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg";
    document.getElementById('p8').src = "http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg";
  }
  else {
    pass = document.getElementById('entertainment');
    document.getElementById('p1').src = "http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg";
    document.getElementById('p2').src = "http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg";
    document.getElementById('p3').src = "http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg";
    document.getElementById('p4').src = "http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg";
    document.getElementById('p5').src = "http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg";
    document.getElementById('p6').src = "http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg";
    document.getElementById('p7').src = "http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg";
    document.getElementById('p8').src = "http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg";
  }
  pass.style.display = "block";
}
function plusPage(self) {
  if(self.parentNode.getElementsByTagName('div')[0].style.display != '') {
    Newimage.setImage1(self,'');
    self.innerHTML = '숨기기';
  }
  else {
    Newimage.setImage1(self,'none');
    self.innerHTML = '더 보기';
  }
}
function searchCreate() {
  var input = document.getElementById('create-name').value;
  count = 0;
  for(var i = 0; i < k.length; i++){
    if((k[i].style.display == '' && createname[i].innerHTML == input) || (k[i].style.display == 'none' && createname[i].innerHTML == input)) {
      error.style.display = 'none';
      count = 1;
      Newimage.setImage2('',i);
    }
    else if(input == '') {
      error.style.display = 'none';
      Newimage.setImage2('',i);
      document.write(scrollPosition);
    }
    else if(createname[i].innerHTML.includes(input) || createname[i].innerHTML.toLowerCase().includes(input)) {
      error.style.display = 'none';
      Newimage.setImage2('',i);
      count = 1;
    }
    else if(input != createname[i].innerHTML && count == 0) {
      error.style.display = '';
      Newimage.setImage2('none',i);
    }
    else {
      Newimage.setImage2('none',i);
    }
  }
}
function enterKey() {
  if(window.event.keyCode == 13) {
    searchCreate();
  }
}
