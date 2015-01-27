
var content = document.getElementById('box');

window.addEventListener('scroll', function(){
  content.style.opacity = (window.innerHeight-3*window.scrollY)/window.innerHeight;
}, false);

var fam = document.getElementById('fam');
var math = document.getElementById('math');
var code = document.getElementById('code');
var info = document.getElementById('info');

window.addEventListener('load', function(){
  fam.addEventListener('mouseover', function(){
    info.style.display = 'inline';
  });
});
