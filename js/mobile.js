// build time:Sun Dec 17 2017 14:58:28 GMT+0800 (CST)
define([],function(){var e=false;var t,n,i;var d,s,a,o,r;var l=function(){s=document.body.scrollHeight/document.body.scrollWidth;a=document.body.scrollWidth;o=0};var c=function(){if(t){document.getElementById("js-mobile-tagcloud").innerHTML=t.innerHTML}if(n){document.getElementById("js-mobile-aboutme").innerHTML=n.innerHTML}if(i){document.getElementById("js-mobile-friends").innerHTML=i.innerHTML}};var m=function(){var e=document.createElement("div");e.id="viewer";e.className="hide";t=document.getElementById("js-tagcloud");n=document.getElementById("js-aboutme");i=document.getElementById("js-friends");function d(e){return $("link.menu-list").attr(e)}var s=t?'<span class="viewer-title">'+d("tags")+'</span><div class="viewer-div tagcloud" id="js-mobile-tagcloud"></div>':"";var a=i?'<span class="viewer-title">'+d("friends")+'</span><div class="viewer-div friends" id="js-mobile-friends"></div>':"";var o=n?'<span class="viewer-title">'+d("about")+'</span><div class="viewer-div aboutme" id="js-mobile-aboutme"></div>':"";e.innerHTML='<div id="viewer-box">        <div class="viewer-box-l">            <div class="viewer-box-wrap">'+o+a+s+'</div>        </div>        <div class="viewer-box-r"></div>        </div>';document.getElementsByTagName("body")[0].appendChild(e);var l=document.getElementById("viewer-box");r=l;l.style.height=document.body.scrollHeight+"px"};var u=function(t,n){document.getElementById("viewer").className="";setTimeout(function(){r.className="anm-swipe"},0);e=true;document.ontouchstart=function(e){if(e.target.tagName!="A"){return false}}};var v=function(){document.getElementById("viewer-box").className="";e=false;document.ontouchstart=function(){return true}};var f=function(){var t=t;document.getElementById("viewer-box").addEventListener("webkitTransitionEnd",function(){if(e==false){document.getElementById("viewer").className="hide";e=true}else{}},false);d.addEventListener("touchend",function(){u()},false);var n=document.getElementsByClassName("viewer-box-r")[0];var i;var s;n.addEventListener("touchstart",function(){i=+new Date},false);n.addEventListener("touchend",function(){s=+new Date;if(s-i<300){v()}i=0;s=0},false);$(".slider-trigger").click(function(){u()});$(".viewer-box-r").click(function(){v()});var a=$("#mobile-nav .overlay");var o=$(".js-mobile-header");window.onscroll=function(){var e=document.documentElement.scrollTop+document.body.scrollTop;if(e>=69){a.addClass("fixed")}else{a.removeClass("fixed")}if(e>=160){o.removeClass("hide").addClass("fixed")}else{o.addClass("hide").removeClass("fixed")}};o[0].addEventListener("touchstart",function(){$("html, body").animate({scrollTop:0},"slow")},false)};return{init:function(){d=document.getElementsByClassName("slider-trigger")[0];l();m();c();f();resetTags()}}});
//rebuild by neat 