var searchFunc=function(t,e,r){"use strict";$.ajax({url:t,dataType:"xml",success:function(t){var n=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),a=document.getElementById(e),s=document.getElementById(r);a.addEventListener("input",function(){var t='<ul class="search-result-list">',e=this.value.trim().toLowerCase().split(/[\s\-]+/);s.innerHTML="",this.value.trim().length<=0||(n.forEach(function(r){var n=!0,a=r.title.trim().toLowerCase(),s=r.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),i=r.url,c=-1,l=-1,u=-1;if(""!=a&&""!=s&&e.forEach(function(t,e){c=a.indexOf(t),l=s.indexOf(t),c<0&&l<0?n=!1:(l<0&&(l=0),0==e&&(u=l))}),n){t+="<li><a href='"+i+"' class='search-result-title'>> "+a+"</a>";var o=r.content.trim().replace(/<[^>]+>/g,"");if(u>=0){var h=u-6,f=u+6;h<0&&(h=0),0==h&&(f=10),f>o.length&&(f=o.length);var m=o.substr(h,f);e.forEach(function(t){var e=new RegExp(t,"gi");m=m.replace(e,'<em class="search-keyword">'+t+"</em>")}),t+='<p class="search-result">'+m+"...</p>"}}}),s.innerHTML=t)})}})};