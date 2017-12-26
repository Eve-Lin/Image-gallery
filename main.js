var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
var photos=['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

for(var i=0; i<photos.length; i++){
  var xxx='images/'+photos[i];
  var newImage = document.createElement('img');
  newImage.setAttribute('src', xxx);
  thumbBar.appendChild(newImage);
  newImage.onclick=function change(e){
  var source=e.target.getAttribute('src');
  function displayImage(){
    displayedImage.setAttribute('src', source);
};
displayImage(source);
};
btn.onclick=function(){
  var btnClass=btn.getAttribute('class');
  if(btnClass==='dark'){
    btn.setAttribute('class', 'light');
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    btn.textContent='Lighten';
  }
  else{
    btn.setAttribute('class', 'dark');
      overlay.style.backgroundColor ='rgba(0,0,0,0)';
      btn.textContent='Darken';
  };
};
};
/* Wiring up the Darken/Lighten button */
