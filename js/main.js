// build time:Sun Jan 07 2018 19:02:43 GMT+0800 (CST)
require([],function(){var i=yiliaConfig.rootUrl+"js/";var e=false;var t=function(){require([i+"mobile.js"],function(i){i.init();e=true})};var a=false;var n=function(){require([i+"pc.js"],function(i){i.init();a=true})};var o={versions:function(){var i=window.navigator.userAgent;return{trident:i.indexOf("Trident")>-1,presto:i.indexOf("Presto")>-1,webKit:i.indexOf("AppleWebKit")>-1,gecko:i.indexOf("Gecko")>-1&&i.indexOf("KHTML")==-1,mobile:!!i.match(/AppleWebKit.*Mobile.*/),ios:!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:i.indexOf("Android")>-1||i.indexOf("Linux")>-1,iPhone:i.indexOf("iPhone")>-1||i.indexOf("Mac")>-1,iPad:i.indexOf("iPad")>-1,webApp:i.indexOf("Safari")==-1,weixin:i.indexOf("MicroMessenger")==-1}}()};$(window).bind("resize",function(){if(e&&a){$(window).unbind("resize");return}var i=$(window).width();if(i>768){n()}else{t()}});if(!!o.versions.mobile||$(window).width()<=768){t()}else{n()}resetTags=function(){var i=$(".tagcloud a");for(var e=0;e<i.length;e++){var t=Math.floor(Math.random()*7);i.eq(e).addClass("color"+t)}$(".article-category a:nth-child(-n+2)").attr("class","color0")};if(!!yiliaConfig.fancybox){require([yiliaConfig.fancybox_js],function(i){var e=$(".isFancy");if(e.length!=0){var t=$(".article-inner img");for(var a=0,n=t.length;a<n;a++){var o=t.eq(a).attr("src");var r=t.eq(a).attr("alt");if(typeof r=="undefined"){var r=t.eq(a).attr("title")}var c=t.eq(a).attr("width");var l=t.eq(a).attr("height");t.eq(a).replaceWith("<a href='"+o+"' title='"+r+"' rel='fancy-group' class='fancy-ctn fancybox'><img src='"+o+"' width="+c+" height="+l+" title='"+r+"' alt='"+r+"'></a>")}$(".article-inner .fancy-ctn").fancybox({type:"image"})}})}if(!!yiliaConfig.isHome){var r=["fade-left","flip-down","zoom-in-up","fade-up-left","zoom-in-left","zoom-out"],c=r.length,l=r[Math.floor(Math.random()*c)];$(".body-wrap > article").each(function(){if($(this).offset().top<$(window).scrollTop()+$(window).height()){$(this).css({opacity:1})}else{$(this).attr("data-aos",l).attr("data-aos-duration",800).attr("data-aos-delay",150)}})}else{$(".body-wrap > article").css({opacity:1})}if(yiliaConfig.toc){require(["toc"],function(){})}var f=["#6da336","#ff945c","#66CC66","#99CC99","#CC6666","#76becc","#c99979","#918597","#4d4d4d"];var s=Math.ceil(Math.random()*(f.length-1));$("#container .left-col .overlay").css({"background-color":f[s],opacity:.3});$("#container #mobile-nav .overlay").css({"background-color":f[s],opacity:.5});$("table").wrap("<div class='table-area'></div>");$(document).ready(function(){if($("#comments").length<1){$("#scroll > a:nth-child(2)").hide()}});if(yiliaConfig.isArchive||yiliaConfig.isTag||yiliaConfig.isCategory){$(document).ready(function(){$("#footer").after("<button class='hide-labels'>TAGS</button>");$(".hide-labels").click(function(){$(".article-info").toggle(200)})})}$("ul > li").each(function(){var i={field:this.textContent.substring(0,3),check:function(i){return this.field===i}};var e=["[ ]",["[x]","checked"]];var t=i.check(e[1][0]);var a=i.check(e[0]);var n=$(this);function o(i,e){n.html(n.html().replace(i,"<input type='checkbox' "+e+" disabled >"))}if(t||a){this.classList.add("task-list");if(t){o(e[1][0],e[1][1]);this.classList.add("check")}else{o(e[0],"")}}})});
//rebuild by neat 