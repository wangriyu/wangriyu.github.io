// build time:Mon Apr 23 2018 22:43:26 GMT+0800 (CST)
var searchFunc=function(e,t,r){"use strict";$.ajax({url:e,dataType:"xml",success:function(e){var a=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();var n=document.getElementById(t);var i=document.getElementById(r);n.addEventListener("input",function(){var e='<ul class="search-result-list">';var t=this.value.trim().toLowerCase().split(/[\s\-]+/);i.innerHTML="";if(this.value.trim().length<=0){return}a.forEach(function(r){var a=true;var n=[];var i=r.title.trim().toLowerCase();var s=r.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var c=r.url;var l=-1;var u=-1;var f=-1;if(i!=""&&s!=""){t.forEach(function(e,t){l=i.indexOf(e);u=s.indexOf(e);if(l<0&&u<0){a=false}else{if(u<0){u=0}if(t==0){f=u}}})}if(a){e+="<li><a href='"+c+"' class='search-result-title'>"+"> "+i+"</a>";var o=r.content.trim().replace(/<[^>]+>/g,"");if(f>=0){var v=f-6;var h=f+6;if(v<0){v=0}if(v==0){h=10}if(h>o.length){h=o.length}var m=o.substr(v,h);t.forEach(function(e){var t=new RegExp(e,"gi");m=m.replace(t,'<em class="search-keyword">'+e+"</em>")});e+='<p class="search-result">'+m+"...</p>"}}});i.innerHTML=e})}})};
//rebuild by neat 