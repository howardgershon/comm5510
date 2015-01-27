var content = document.getElementById('box');
window.addEventListener('scroll', function(){
  content.style.opacity = (window.innerHeight-3*window.scrollY)/window.innerHeight;
}, false);
