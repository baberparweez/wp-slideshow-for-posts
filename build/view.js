(()=>{function e(e){const t=e.getAttribute("data-num-posts")||"3",n=e.getAttribute("data-sort-order")||"desc";s(`${e.getAttribute("data-custom-api-url")||"https://wptavern.com"}/wp-json/wp/v2/posts?_embed&per_page=${t}&order=${n}&orderby=date`,e,t,n)}function t(e,t){t.innerHTML="";let o=t.querySelector(".slideshow_for_posts--slides_outer"),r=t.querySelector(".slideshow_for_posts--slides");r||r?r.innerHTML="":(o=document.createElement("div"),o.className="slideshow_for_posts--slides_outer",t.appendChild(o),r=document.createElement("div"),r.className="slideshow_for_posts--slides",o.appendChild(r)),e.forEach((e=>{const t=document.createElement("div");t.className="slideshow_for_posts--slide";const s=e.title.rendered,n=e._embedded["wp:featuredmedia"]?e._embedded["wp:featuredmedia"][0].source_url:"",a=new Date(e.date).toLocaleDateString(),i=e.excerpt.rendered,d=e.link;t.innerHTML=`\n            <div class="slideshow_for_posts--content">\n                ${n?`<img src="${n}" alt="${s}" />`:""}\n                <a href="${d}" target="_blank"><h4 class="title">${s}</h4></a>\n                <p class="date">${a}</p>\n                <div class="excerpt">${i}</div>\n                <a class="button" href="${d}" target="_blank">Read more</a>\n            </div>\n        `,o.appendChild(r),r.appendChild(t)}));let a=t.querySelector("form");a||(a=document.createElement("form"),a.classList.add("slideshow_for_posts--form"),a.innerHTML='\n              <input type="text" id="customApiUrl" placeholder="Enter WordPress site URL" />\n              <button type="submit">New Posts</button>\n          ',o.prepend(a)),a.onsubmit=e=>{e.preventDefault();const n=t.getAttribute("data-num-posts")||"3",o=t.getAttribute("data-sort-order")||"desc",r=a.querySelector("#customApiUrl").value.trim();r&&s(`${r}/wp-json/wp/v2/posts?_embed&per_page=${n}&order=${o}&orderby=date`,t,n,o)},n(t)}function s(s,o,r,a){const i=`posts_${encodeURIComponent(s)}`,d=sessionStorage.getItem(i);o.innerHTML='<svg class="spinner" width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_aj0A{transform-origin:center;animation:spinner_KYSC .75s infinite linear}@keyframes spinner_KYSC{100%{transform:rotate(360deg)}}</style><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" class="spinner_aj0A"/></svg>',d?(t(JSON.parse(d),o),n(o)):fetch(`${s}/wp-json/wp/v2/posts?_embed&per_page=${r}&order=${a}&orderby=date`).then((e=>e.json())).then((e=>{sessionStorage.setItem(i,JSON.stringify(e)),o.innerHTML="",t(e,o),n(o)})).catch((t=>{console.error("Fetching posts failed:",t),function(t,s,n){t.innerHTML='<p>Error loading posts. Please try a different WordPress URL.</p><button class="button" id="retryButton">Reload Slider</button>';t.querySelector("#retryButton").addEventListener("click",(()=>{e(t)}))}(o)}))}function n(e){const t=e.querySelector(".slideshow_for_posts--next"),s=e.querySelector(".slideshow_for_posts--prev");t&&t.remove(),s&&s.remove();let n=0;const o=e.querySelector(".slideshow_for_posts--slides"),r=o.querySelectorAll(".slideshow_for_posts--slide"),a=r.length;let i;function d(){r.forEach(((e,t)=>{t===n?e.classList.add("active"):e.classList.remove("active")}))}function l(){const e=`translateX(-${100*n}%)`;o.style.transform=e}d();const c=e=>{i="touchstart"===e.type?e.touches[0].clientX:e.clientX,currentX=i,o.style.cursor="grabbing"},p=e=>{if(e.preventDefault(),"touchmove"!==e.type)return;currentX=e.touches[0].clientX;const t=currentX-i,s=o.offsetWidth,n=(a-1)*s,r=Math.min(Math.max(-n,t),0);o.style.transform=`translateX(${r}px)`},u=e=>{const t="touchend"===e.type?e.changedTouches[0].clientX:e.clientX;o.offsetWidth,t-i>50?0===n?(o.style.transition="none",n=a-1,d(),o.style.transform=`translateX(-${100*a}%)`,setTimeout((()=>{o.style.transition="transform 0.3s ease-in-out",l()}),10)):(n--,d(),l()):i-t>50?n===a-1?(o.style.transition="none",n=0,d(),o.style.transform=`translateX(${100*a}%)`,setTimeout((()=>{o.style.transition="transform 0.3s ease-in-out",l()}),10)):(n++,d(),l()):l(),currentX=null,o.style.cursor=""};if(e.addEventListener("touchstart",c),e.addEventListener("touchmove",p),e.addEventListener("touchend",u),e.addEventListener("mousedown",c),e.addEventListener("mousemove",p),e.addEventListener("mouseup",u),r.length>1){const t=document.createElement("button");t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg>',t.classList.add("slideshow_for_posts--prev"),t.addEventListener("click",(function(){0===n?(o.style.transition="none",n=a-1,d(),o.style.transform=`translateX(-${100*a}%)`,setTimeout((()=>{o.style.transition="transform 0.3s ease",l()}),10)):(n--,d(),l())}));const s=document.createElement("button");s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg>',s.classList.add("slideshow_for_posts--next"),s.addEventListener("click",(function(){n===a-1?(o.style.transition="none",n=0,d(),o.style.transform=`translateX(${100*a}%)`,setTimeout((()=>{o.style.transition="transform 0.3s ease",l()}),10)):(n++,d(),l())})),e.appendChild(t),e.appendChild(s)}}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".slideshow_for_posts--container").forEach((t=>{e(t),document.addEventListener("keydown",(function(e){const s=t.querySelector(".slideshow_for_posts--prev"),n=t.querySelector(".slideshow_for_posts--next");"ArrowLeft"===e.key&&s?s.click():"ArrowRight"===e.key&&n&&n.click()}))}))}))})();