
var content = document.getElementById('box');

window.addEventListener('scroll', function(){
  content.style.opacity = (window.innerHeight-3*window.scrollY)/window.innerHeight;
}, false);

var fam = docuement.getElementById('fam');
var math = docuement.getElementById('math');
var code = docuement.getElementById('code');
var info = docuement.getElementById('info');

fam.addEventListener('mouseover'function(){
  info.style.display = block;
});
