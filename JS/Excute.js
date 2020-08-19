var pass = document.getElementById('all');
var k = document.querySelectorAll(".search-creator");
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
  for(var i = 0; i < k.length; i++){
    if((k[i].style.display == '' && document.querySelectorAll(".title")[i].innerHTML == input) || (k[i].style.display == 'none' && document.querySelectorAll(".title")[i].innerHTML == input)) {
      Newimage.setImage2('',i);
    }
    else if(input == '') {
      Newimage.setImage2('',i);
    }
    else {
      Newimage.setImage2('none',i);
    }
  }
}
