"use strict";!function(){var t=document.querySelector(".parallax"),e=document.querySelectorAll(".parallax__group"),n=t.querySelector(".intro"),o=t.querySelector(".portfolio"),a=t.querySelector(".about"),i=n.querySelector(".intro__button--portfolio"),r=n.querySelector(".intro__button--about"),c=o.querySelectorAll(".portfolio__item"),l=o.querySelector(".portfolio__arrow--prev"),u=o.querySelector(".portfolio__arrow--next"),s=a.querySelector(".about__contacts"),d=!1,f=function(t,e,n){var o=t.scrollTop,a=e-o,i=0,r=function(){d=!0,i+=20;var e=Math.easeInOutQuad(i,o,a,n);t.scrollTop=e,i<n?setTimeout(r,20):d=!1};r()};Math.easeInOutQuad=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t};var p,_,v=0,h=window.innerHeight,g=e.length-1,m=function(e){h=window.innerHeight,f(t,v+=h,e),h*g<=v&&(v=h*g)},y=function(e){h=window.innerHeight,f(t,v-=h,e),v<=0&&(v=0)};i.addEventListener("click",function(){d||(f(t,h,1e3),v+=h)}),r.addEventListener("click",function(){d||(f(t,2*h,2e3),v+=2*h)}),s.addEventListener("click",function(){d||(f(t,0,2e3),v=0)}),t.addEventListener("wheel",function(e){e.preventDefault(),0<e.deltaY&&!d&&m(1e3),e.deltaY<0&&!d&&y(1e3)}),document.addEventListener("keydown",function(e){40!==e.keyCode||d||(e.preventDefault(),m(1e3)),38!==e.keyCode||d||(e.preventDefault(),y(1e3))}),t.addEventListener("touchmove",function(e){e.preventDefault(),e.stopPropagation()},!1),t.addEventListener("touchstart",function(e){p=e.changedTouches[0]},!1),t.addEventListener("touchend",function(e){_=e.changedTouches[0],50<Math.abs(p.pageY-_.pageY)&&(_.pageY<p.pageY?m(1e3):y(1e3))},!1);var L=o.querySelector(".parallax__back"),E=o.querySelectorAll(".portfolio__wrapper"),q=1,S=function(e,t,n,o){t.forEach(function(e){e.classList.contains(n)&&L.classList.remove("parallax__back--"+e.getAttribute("data-name"))}),function(e,t,n){var o,a=t;for(e>a.length&&(q=1),e<1&&(q=a.length),o=0;o<a.length;o++)a[o].classList.remove(n);a[q-1].classList.add(n)}(e,t,n),t.forEach(function(e){e.classList.contains(n)&&L.classList.add("parallax__back--"+e.getAttribute("data-name"))}),E.forEach(function(e){e.style=o})};o.addEventListener("touchend",function(e){_=e.changedTouches[0],50<Math.abs(p.pageX-_.pageX)&&(_.pageX<p.pageX?S(q+=1,c,"portfolio__item--active","animation-name: slide-left;"):S(q+=-1,c,"portfolio__item--active","animation-name: slide-right;"))}),u.addEventListener("click",function(){S(q+=1,c,"portfolio__item--active","animation-name: slide-left;")}),l.addEventListener("click",function(){S(q+=-1,c,"portfolio__item--active","animation-name: slide-right;")})}();