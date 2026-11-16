(function(){
var d=document,h=d.querySelector('header'),pg=d.getElementById('pg'),hero=d.querySelector('.hero');
function s(){var y=window.scrollY,m=d.documentElement.scrollHeight-window.innerHeight;
h.classList.toggle('s',y>30);if(pg)pg.style.width=(m>0?y/m*100:0)+'%';
if(hero&&y<window.innerHeight)hero.style.setProperty('--py',(y*.25)+'px')}
window.addEventListener('scroll',s,{passive:true});s();
var b=d.querySelector('.bt'),u=d.querySelector('.nav ul');
if(b&&u){b.addEventListener('click',function(){u.classList.toggle('on')});u.addEventListener('click',function(){u.classList.remove('on')})}
var lb=d.getElementById('lb');
if(lb){d.querySelectorAll('.gal img').forEach(function(i){i.addEventListener('click',function(){lb.querySelector('img').src=i.src;lb.classList.add('on')})});
lb.addEventListener('click',function(){lb.classList.remove('on')})}
if('IntersectionObserver' in window){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var el=e.target;io.unobserve(el);el.classList.add('in');
setTimeout(function(){el.classList.remove('rvl','in');el.style.transitionDelay=''},1300)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
d.querySelectorAll('.h,.sub,.ey,.card,.why,.rv,.sp,.ct,details,.gal img,.ci>*,.ba,.art h2,.fcta').forEach(function(el){
var i=Array.prototype.indexOf.call(el.parentNode.children,el)%4;el.style.transitionDelay=(i*90)+'ms';el.classList.add('rvl');io.observe(el)})}
var ba=d.querySelector('.ba');
if(ba){var r=ba.querySelector('input'),t=false;
function set(v){ba.style.setProperty('--p',v+'%');r.value=v}
r.addEventListener('input',function(){t=true;set(r.value)});
var dn=false;
if('IntersectionObserver' in window)new IntersectionObserver(function(e){
if(e[0].isIntersecting&&!dn){dn=true;var t0=null;
(function f(n){if(t)return;if(!t0)t0=n;var k=(n-t0)/2800;if(k>=1){set(50);return}
set(50+42*Math.sin(k*Math.PI*2)*(1-k));requestAnimationFrame(f)})(performance.now())}},{threshold:.6}).observe(ba)}
})();
