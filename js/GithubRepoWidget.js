// build time:Sat Mar 17 2018 15:42:17 GMT+0800 (CST)
(function(){var t="github-widget-rendered",o=".path-divider{margin:0 .25em}.github-box *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;}.github-box{font-family:helvetica,arial,sans-serif;font-size:13px;line-height:18px;background:#fafafa;border:1px solid #ddd;color:#666;border-radius:3px}.github-box a{color:#4183c4;border:0;text-decoration:none}.github-box .github-box-title{position:relative;border-bottom:1px solid #ddd;border-radius:3px 3px 0 0;background:#fcfcfc;background:-moz-linear-gradient(#fcfcfc,#ebebeb);background:-webkit-linear-gradient(#fcfcfc,#ebebeb);}.github-box .github-box-title h3{word-wrap:break-word;font-family:helvetica,arial,sans-serif;font-weight:normal;font-size:16px;color:gray;margin:0;padding:10px 10px 10px 30px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAXBAMAAAD0LQLXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURQAAAL29vc3NzcLCwsjIyNbW1pvTNOEAAAABdFJOUwBA5thmAAAATElEQVQI12MIFoQAEQZFYwcGEGBkUDRUQLCcsYjRXhbqKkEGZQYGqJgSnKXCwGgsAGYpqyobG4WGhioyhBhDgClI3EQAqpaZwQBEAQARmA4G2o55nQAAAABJRU5ErkJggg==) 7px center no-repeat; width: auto;}.github-box .github-box-title h3 .repo{font-weight:bold}.github-box .github-box-title .github-stats{float:right;position:absolute;top:8px;right:10px;font-size:11px;font-weight:bold;line-height:21px;height:auto;min-height:21px}.github-box .github-box-title .github-stats a{display:inline-block;height:21px;color:#666;border:1px solid #ddd;border-radius:3px;padding:0 5px 0 18px;background: white url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAqBAMAAABB12bjAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURf///5mZmdbW1u/v7/r6+rGxscXFxaSkpHLccIMAAABsSURBVBjTY2CgBmBODTOAsFgSi9TFHMBMc1Fmk8BiEItJUMhQWFFQAZXJoC7q7FJYhNBmgG7YQAIWMYTvEExXIbh8oAJWQQe4IGsIlKmowAZVwaKowgxlMgkKmwtCjRAUYBSEqnVkYBAm39EALMwNXwql3eYAAAAASUVORK5CYII=) no-repeat}.github-box .github-box-title .github-stats .watchers{border-right:1px solid #ddd}.github-box .github-box-title .github-stats .forks{background-position:-4px -21px;padding-left:15px}.github-box .github-box-content{padding:10px;font-weight:300}.github-box .github-box-content p{margin:0}.github-box .github-box-content .link{font-weight:bold}.github-box .github-box-download{position:relative;border-top:1px solid #ddd;background:white;border-radius:0 0 3px 3px;padding:10px;height:auto;min-height:24px;}.github-box .github-box-download .updated{word-wrap:break-word;margin:0;font-size:11px;color:#666;line-height:24px;font-weight:300;width:auto}.github-box .github-box-download .updated strong{font-weight:bold;color:#000}.github-box .github-box-download .download{float:right;position:absolute;top:10px;right:10px;height:24px;line-height:24px;font-size:12px;color:#666;font-weight:bold;text-shadow:0 1px 0 rgba(255,255,255,0.9);padding:0 10px;border:1px solid #ddd;border-bottom-color:#bbb;border-radius:3px;background:#f5f5f5;background:-moz-linear-gradient(#f5f5f5,#e5e5e5);background:-webkit-linear-gradient(#f5f5f5,#e5e5e5);}.github-box .github-box-download .download:hover{color:#527894;border-color:#cfe3ed;border-bottom-color:#9fc7db;background:#f1f7fa;background:-moz-linear-gradient(#f1f7fa,#dbeaf1);background:-webkit-linear-gradient(#f1f7fa,#dbeaf1);}@media (max-width: 767px) {.github-box .github-box-title{height:auto;min-height:60px}.github-box .github-box-title h3 .repo{display:block}.github-box .github-box-title .github-stats a{display:block;clear:right;float:right;}.github-box .github-box-download{height:auto;min-height:46px;}.github-box .github-box-download .download{top:32px;}}";function i(t,o,i){return t.getAttribute(o)||i}function e(t,o){return t.querySelector(o)}function a(t,o){t.innerHTML=o}function b(){var t=document.createElement("div");t.innerHTML="x<style>"+o+"</style>";document.getElementsByTagName("head")[0].appendChild(t.lastChild)}function r(o,i){i=JSON.parse(i);a(e(o,".watchers"),i.watchers);a(e(o,".forks"),i.forks);a(e(o,".description span"),i.description);a(e(o,".updated"),"Latest commit to the <strong>"+i.default_branch+"</strong> branch on <strong>"+i.pushed_at.substring(0,10)+"</strong>");if(i.homepage!==null){a(e(o,".link"),'<a href="'+i.homepage+'">'+i.homepage+"</a>")}o.setAttribute(t,"1")}function d(t,o){var i;if(window.XMLHttpRequest){i=new XMLHttpRequest}else{i=new ActiveXObject("Microsoft.XMLHTTP")}i.onreadystatechange=function(){if(i.readyState==4&&i.status==200){r(t,i.responseText)}else{}};i.open("GET","https://api.github.com/repos/"+o,true);i.send()}function n(){var o=document.querySelectorAll(".github-widget"),e,b,r,n,h,g,s;for(var l=0;l<o.length;l++){e=o[l];if(!i(e,t,"")){b=i(e,"data-repo",""),r=b.split("/")[0],n=b.split("/")[1],h="http://github.com/"+r,g="http://github.com/"+r+"/"+n;s='<div class="github-box repo">'+'<div class="github-box-title">'+"<h3>"+'<a class="owner" href="'+h+'" title="'+h+'">'+r+"</a>"+'<span class="path-divider">/</span>'+'<a class="repo" href="'+g+'" title="'+g+'">'+n+"</a>"+"</h3>"+'<div class="github-stats">'+'<span class="github-text">Star </span>'+'<a class="watchers" href="'+g+'/watchers" title="See watchers">?</a>'+'<span class="github-text">　Fork </span>'+'<a class="forks" href="'+g+'/network/members" title="See forkers">?</a>'+"</div>"+"</div>"+'<div class="github-box-content">'+'<p class="description"><span></span> &mdash; <a href="'+g+'#readme">Read More</a></p>'+'<p class="link"></p>'+"</div>"+'<div class="github-box-download">'+'<div class="updated"></div>'+'<a class="download" href="'+g+'/zipball/master" title="Get repository">Download as zip</a>'+"</div>"+"</div>";a(e,s);d(e,b)}}}b();n();window.GithubRepoWidget={init:n}})();
//rebuild by neat 