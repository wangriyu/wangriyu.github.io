// build time:Tue Apr 24 2018 23:34:48 GMT+0800 (CST)
var Instagram=function(){var t=[];var a=function(t){for(var a in t){for(var e=0,i=t[a].srclist.length;e<i;e++){var r=t[a].bigSrclist[e];var n=new Image;n.src=r}}};var e=function(t){for(var e in t){var i="";for(var r=0,n=t[e].srclist.length;r<n;r++){i+='<li>\t\t\t\t\t\t\t\t<div class="img-box">\t\t\t\t\t\t\t\t\t<a class="img-bg" rel="example_group" href="'+t[e].bigSrclist[r]+'" title="'+t[e].text[r]+'"></a>\t\t\t\t\t\t\t\t\t<img lazy-src="'+t[e].srclist[r]+'" alt="">\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t</li>'}$('<section class="archives album"><h1 class="year">'+t[e].year+"<em>"+t[e].month+'月</em></h1>\t\t\t\t<ul class="img-box-ul">'+i+"</ul>\t\t\t\t</section>").appendTo($(".instagram"))}$(".instagram").lazyload();s();setTimeout(function(){a(t)},3e3);$("a[rel=example_group]").fancybox()};var i=function(t){if(t.indexOf("outbound-distilleryimage")>=0){var a=t.match(/outbound-distilleryimage([\s\S]*?)\//)[1];var e=t.split("/");return"http://distilleryimage"+a+".ak.instagram.com/"+e[e.length-1]}else{var i="http://photos-g.ak.instagram.com/hphotos-ak-xpf1/";var e=t.split("/");return i+e[e.length-1]}};var r=function(t){var a={};for(var r=0,n=t.length;r<n;r++){var s=new Date(t[r].created_time*1e3);var o=s.getFullYear();var l=s.getMonth()+1;var c=i(t[r].images.low_resolution.url);var u=i(t[r].images.standard_resolution.url);var m=t[r].caption?t[r].caption.text:"";var g=o+"-"+l;if(a[g]){a[g].srclist.push(c);a[g].bigSrclist.push(u);a[g].text.push(m)}else{a[g]={year:o,month:l,srclist:[u],bigSrclist:[u],text:[m]}}}e(a)};var n=function(a){$(".open-ins").html("图片来自instagram，正在加载中…");$.ajax({url:a,type:"GET",dataType:"jsonp",success:function(a){if(a.meta.code==200){t=t.concat(a.data);var e=a.pagination.next_url;if(e){n(e)}else{$(".open-ins").html("图片来自instagram，点此访问");r(t)}}else{alert("access_token timeout!")}}})};var s=function(){if($(document).width()<=600){$(".img-box").css({width:"auto",height:"auto"})}else{var t=$(".img-box-ul").width();var a=Math.max(t*.26,157);$(".img-box").width(a).height(a)}};var o=function(){$(window).resize(function(){s()})};return{init:function(){var t=$(".instagram").attr("data-client-id");var a=$(".instagram").attr("data-user-id");if(!t){alert("Didn't set your instagram client_id.\nPlease see the info on the console of your brower.");console.log("Please open 'http://instagram.com/developer/clients/manage/' to get your client-id.");return}n("https://api.instagram.com/v1/users/"+a+"/media/recent/?client_id="+t+"&count=100");o()}}}();$(function(){Instagram.init()});
//rebuild by neat 