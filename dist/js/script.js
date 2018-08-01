var modal=document.querySelector(".overlay"),btn=document.querySelector(".content__button"),close=document.querySelector(".popup-close");btn.onclick=function(){modal.style.display="block"},close.onclick=function(){modal.style.display="none"},window.onclick=function(o){o.target==modal&&(modal.style.display="none")};
//# sourceMappingURL=script.js.map
