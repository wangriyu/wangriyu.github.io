!function(){if("none"!==$(".left-col").css("display")){const t=new APlayer({element:document.getElementById("aplayer"),mutex:!0,theme:"#EBEEDF",order:"random",lrcType:3,fixed:!0});var e=new XMLHttpRequest;e.open("get","https://api.i-meto.com/meting/api?server=netease&type=playlist&id=883067320"),e.onreadystatechange=function(){4===e.readyState&&(200===e.status?(t.list.add(JSON.parse(e.responseText)),t.play()):(t.list.add({title:"Fell For U",author:"Noicybino",url:"https://blog-1255567157.cos.ap-shanghai.myqcloud.com/FellForU.mp3",pic:"/img/love.png",lrc:""}),t.play()))},e.send()}}();