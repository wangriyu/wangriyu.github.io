// build time:Sun Dec 03 2017 20:24:24 GMT+0800 (CST)
require([],function(){var i=yiliaConfig.rootUrl+"js/";var e=false;var a=function(){require([i+"mobile.js"],function(i){i.init();e=true})};var t=false;var n=function(){require([i+"pc.js"],function(i){i.init();t=true})};var r={versions:function(){var i=window.navigator.userAgent;return{trident:i.indexOf("Trident")>-1,presto:i.indexOf("Presto")>-1,webKit:i.indexOf("AppleWebKit")>-1,gecko:i.indexOf("Gecko")>-1&&i.indexOf("KHTML")==-1,mobile:!!i.match(/AppleWebKit.*Mobile.*/),ios:!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:i.indexOf("Android")>-1||i.indexOf("Linux")>-1,iPhone:i.indexOf("iPhone")>-1||i.indexOf("Mac")>-1,iPad:i.indexOf("iPad")>-1,webApp:i.indexOf("Safari")==-1,weixin:i.indexOf("MicroMessenger")==-1}}()};$(window).bind("resize",function(){if(e&&t){$(window).unbind("resize");return}var i=$(window).width();if(i>768){n()}else{a()}});if(!!r.versions.mobile||$(window).width()<=768){a()}else{n()}resetTags=function(){var i=$(".tagcloud a");for(var e=0;e<i.length;e++){var a=Math.floor(Math.random()*7);i.eq(e).addClass("color"+a)}$(".article-category a:nth-child(-n+2)").attr("class","color0")};if(!!yiliaConfig.fancybox){require([yiliaConfig.fancybox_js],function(i){var e=$(".isFancy");if(e.length!=0){var a=$(".article-inner img");for(var t=0,n=a.length;t<n;t++){var r=a.eq(t).attr("src");var o=a.eq(t).attr("alt");if(typeof o=="undefined"){var o=a.eq(t).attr("title")}var c=a.eq(t).attr("width");var l=a.eq(t).attr("height");a.eq(t).replaceWith("<a href='"+r+"' title='"+o+"' rel='fancy-group' class='fancy-ctn fancybox'><img src='"+r+"' width="+c+" height="+l+" title='"+o+"' alt='"+o+"'></a>")}$(".article-inner .fancy-ctn").fancybox({type:"image"})}})}if(!!yiliaConfig.animate){if(!!yiliaConfig.isHome){require([yiliaConfig.scrollreveal],function(i){var e=["pulse","fadeInRight","flipInX","lightSpeedIn","rotateInUpLeft","slideInUp","zoomIn"],a=e.length,t=e[Math.ceil(Math.random()*a)-1];if(!window.requestAnimationFrame){$(".body-wrap > article").css({opacity:1});if(navigator.userAgent.match(/Safari/i)){function n(){$(".article").each(function(){if($(this).offset().top<=$(window).scrollTop()+$(window).height()&&!$(this).hasClass("show")){$(this).removeClass("hidden").addClass("show");$(this).addClass("is-hiddened")}else{if(!$(this).hasClass("is-hiddened")){$(this).addClass("hidden")}}})}$(window).on("scroll",function(){n()});n()}return}var r=".body-wrap > article";var o=$(".body-wrap > article:first-child");if(o.height()>$(window).height()){var r=".body-wrap > article:not(:first-child)";o.css({opacity:1})}i({duration:0,delay:0,mobile:true,afterReveal:function(i){$(i).addClass("animated "+t).css({opacity:1})}}).reveal(r)})}else{$(".body-wrap > article").css({opacity:1})}}if(yiliaConfig.toc){require(["toc"],function(){})}var o=["#6da336","#ff945c","#66CC66","#99CC99","#CC6666","#76becc","#c99979","#918597","#4d4d4d"];var c=Math.ceil(Math.random()*(o.length-1));$("#container .left-col .overlay").css({"background-color":o[c],opacity:.3});$("#container #mobile-nav .overlay").css({"background-color":o[c],opacity:.5});$("table").wrap("<div class='table-area'></div>");$(document).ready(function(){if($("#comments").length<1){$("#scroll > a:nth-child(2)").hide()}});if(yiliaConfig.isArchive||yiliaConfig.isTag||yiliaConfig.isCategory){$(document).ready(function(){$("#footer").after("<button class='hide-labels'>TAGS</button>");$(".hide-labels").click(function(){$(".article-info").toggle(200)})})}$("ul > li").each(function(){var i={field:this.textContent.substring(0,3),check:function(i){return this.field===i}};var e=["[ ]",["[x]","checked"]];var a=i.check(e[1][0]);var t=i.check(e[0]);var n=$(this);function r(i,e){n.html(n.html().replace(i,"<input type='checkbox' "+e+" disabled >"))}if(a||t){this.classList.add("task-list");if(a){r(e[1][0],e[1][1]);this.classList.add("check")}else{r(e[0],"")}}})});
//rebuild by neat 