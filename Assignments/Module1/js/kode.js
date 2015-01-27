
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
    info.innerHTML = 'My family is the most important aspect of my life. I am married with four wonderful children: our three sons Kyle (6), Aiden (4), and Owen (&lt;&lt;1), and our daughter Charlie (1)';
    info.style.display = 'inline-block';
  });
  math.addEventListener('mouseover', function(){
    info.innerHTML = 'I have been studying mathematics for many years. I can remember how exicited I was when I first realized that you could multiply numbers and work outside of base-10. I received my BS in mathematics from the University of Utah in 2013 and will receive my MS in computational engineering and science from the University of Utah in 2015.';
    info.style.display = 'inline-block';
  });
  code.addEventListener('mouseover', function(){
    info.innerHTML = 'From the time I used the C-prompt to play Wolfenstein 3D until now computers have been an intergral part of my life. Currenlty, I use computers for mathematical and statistical computing (in R) and web development (HTML5, CSS3, and JavaScript)';
    info.style.display = 'inline-block';
  });
  fam.addEventListener('mouseout', function(){
    info.innerHTML = '';
    info.style.display = 'none';
  });
  math.addEventListener('mouseout', function(){
    info.innerHTML = '';
    info.style.display = 'none';
  });
  code.addEventListener('mouseout', function(){
    info.innerHTML = '';
    info.style.display = 'none';
  });
});
