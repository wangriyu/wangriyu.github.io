require([], function (){

    var isMobileInit = false;
    var loadMobile = function(){
        require([yiliaConfig.rootUrl + 'js/mobile.js'], function(mobile){
            mobile.init();
            isMobileInit = true;
        })
    }
    var isPCInit = false;
    var loadPC = function(){
        require([yiliaConfig.rootUrl + 'js/pc.js'], function(pc){
            pc.init();
            isPCInit = true;
        })
    }

    var browser = {
        versions: function() {
        var u = window.navigator.userAgent;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
            iPad: u.indexOf('iPad') > -1, //是否为iPad
            webApp: u.indexOf('Safari') == -1 ,//是否为web应用程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') == -1 //是否为微信浏览器
            };
        }()
    }

    $(window).bind("resize", function() {
        if (isMobileInit && isPCInit) {
            $(window).unbind("resize");
            return;
        }
        var w = $(window).width();
        if (w >= 700) {
            loadPC();
        } else {
            loadMobile();
        }
    });

    if(!!browser.versions.mobile || $(window).width() < 800){
        loadMobile();
    } else {
        loadPC();
    }

    resetTags = function(){
        var tags = $(".tagcloud a");
        for(var i = 0; i < tags.length; i++){
            var num = Math.floor(Math.random()*7);
            tags.eq(i).addClass("color" + num);
        }
        $(".article-category a:nth-child(-n+2)").attr("class", "color0");
    }

    // fancyBox
    if(!!yiliaConfig.fancybox){
        require([yiliaConfig.fancybox_js], function(pc){
            var isFancy = $(".isFancy");
            if(isFancy.length != 0){
                var imgArr = $(".article-inner img");
                for(var i=0,len=imgArr.length;i<len;i++){
                    var src = imgArr.eq(i).attr("src");
                    var title = imgArr.eq(i).attr("alt");
                    if(typeof(title) == "undefined"){
                        var title = imgArr.eq(i).attr("title");
                    }
                    var width = imgArr.eq(i).attr("width");
                    var height = imgArr.eq(i).attr("height");
                    imgArr.eq(i).replaceWith("<a href='"+src+"' title='"+title+"' rel='fancy-group' class='fancy-ctn fancybox'><img src='"+src+"' width="+width+" height="+height+" title='"+title+"' alt='"+title+"'></a>");
                }
                $(".article-inner .fancy-ctn").fancybox({ type: "image" });
            }
        })
    }

    // Animate on Homepage
    if(!!yiliaConfig.animate) {
        if(!!yiliaConfig.isHome) {
            require([yiliaConfig.scrollreveal], function (ScrollReveal) {
                var animationNames = [
                "pulse", "fadeIn","fadeInRight", "flipInX", "lightSpeedIn","rotateInUpLeft", "slideInUp","zoomIn",
                ],
                len = animationNames.length,
                randomAnimationName = animationNames[Math.ceil(Math.random() * len) - 1];

                // Fallback (CSS3 keyframe, requestAnimationFrame)
                if (!window.requestAnimationFrame) {
                    $('.body-wrap > article').css({opacity: 1});
                    if (navigator.userAgent.match(/Safari/i)) {
                        function showArticle(){
                            $(".article").each(function(){
                                if( $(this).offset().top <= $(window).scrollTop()+$(window).height() && !($(this).hasClass('show')) ) {
                                    $(this).removeClass("hidden").addClass("show");
                                    $(this).addClass("is-hiddened");
                                } else {
                                    if(!$(this).hasClass("is-hiddened")) {
                                        $(this).addClass("hidden");
                                    }
                                }
                            })
                        }
                        $(window).on('scroll', function(){
                            showArticle();
                        });
                        showArticle();
                    }
                    return;
                }

                var animateScope = ".body-wrap > article";
                var $firstArticle = $(".body-wrap > article:first-child");
                if ($firstArticle.height() > $(window).height()) {
                    var animateScope = ".body-wrap > article:not(:first-child)";
                    $firstArticle.css({opacity: 1});
                }
                ScrollReveal({
                    duration: 0,
                    afterReveal: function (domEl) {
                        $(domEl).addClass('animated ' + randomAnimationName).css({opacity: 1})
                    }
                }).reveal(animateScope);
            })
        } else {
            $('.body-wrap > article').css({opacity: 1});
        }
    }

    // TOC
    if (yiliaConfig.toc) {
        require(['toc'], function(){ })
    }

    // Random Color 边栏顶部随机颜色
    var colorList = ["#6da336", "#ff945c", "#66CC66", "#99CC99", "#CC6666", "#76becc", "#c99979", "#918597", "#4d4d4d"];
    var id = Math.ceil(Math.random()*(colorList.length-1));
    // PC
    $("#container .left-col .overlay").css({"background-color": colorList[id],"opacity": .3});
    // Mobile
    $("#container #mobile-nav .overlay").css({"background-color": colorList[id],"opacity": .5});

    // Table
    $("table").wrap("<div class='table-area'></div>");

    // Hide Comment Button
    $(document).ready(function() {
        if ($("#comments").length < 1) {
            $("#scroll > a:nth-child(2)").hide();
        }
    })

    // Hide Labels
    if(yiliaConfig.isArchive || yiliaConfig.isTag || yiliaConfig.isCategory) {
        $(document).ready(function() {
            $("#footer").after("<button class='hide-labels'>TAGS</button>");
            $(".hide-labels").click(function() {
                $(".article-info").toggle(200);
            })
        })
    }

    // Task lists in markdown
    $('ul > li').each(function() {
        var taskList = {
            field: this.textContent.substring(0, 3),
            check: function(str) {
                return this.field === str;
            }
        }

        var string = ["[ ]", ["[x]", "checked"]];
        var checked = taskList.check(string[1][0]);
        var unchecked = taskList.check(string[0]);

        var $current = $(this);
        function update(str, check) {
            $current.html($current.html().replace(
              str, "<input type='checkbox' " + check + " disabled >")
            )
        }

        if (checked || unchecked) {
            this.classList.add("task-list");
            if (checked) {
                update(string[1][0], string[1][1]);
                this.classList.add("check");
            } else {
                update(string[0], "");
            }
        }
    });

  /**
   *  404页面
   */
  (function() {
       var lastTime = 0;
       var vendors = ['ms', 'moz', 'webkit', 'o'];
       for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
         window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
         window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
       }

       if (!window.requestAnimationFrame)
         window.requestAnimationFrame = function(callback, element) {
           var currTime = new Date().getTime();
           var timeToCall = Math.max(0, 16 - (currTime - lastTime));
           var id = window.setTimeout(function() {
               callback(currTime + timeToCall);
             },
             timeToCall);
           lastTime = currTime + timeToCall;
           return id;
         };

       if (!window.cancelAnimationFrame)
         window.cancelAnimationFrame = function(id) {
           clearTimeout(id);
         };
     }());

  //math2 utils
  var Math2={};
  Math2.random = function (t, n) {
    return Math.random() * (n - t) + t
  }, Math2.map = function (t, n, r, a, o) {
    return (o - a) * ((t - n) / (r - n)) + a
  }, Math2.randomPlusMinus = function (t) {
    return t = t ? t : .5, Math.random() > t ? -1 : 1
  }, Math2.randomInt = function (t, n) {
    return n += 1, Math.floor(Math.random() * (n - t) + t)
  }, Math2.randomBool = function (t) {
    return t = t ? t : .5, Math.random() < t ? !0 : !1
  }, Math2.degToRad = function (t) {
    return rad = t * Math.PI / 180, rad
  }, Math2.radToDeg = function (t) {
    return deg = 180 / (Math.PI * t), deg
  }, Math2.rgbToHex = function (t) {
    function n(t) {
      return ("0" + parseInt(t).toString(16)).slice(-2)
    }
    t = t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    var r = n(t[1]) + n(t[2]) + n(t[3]);
    return r.toUpperCase()
  }, Math2.distance = function (t, n, r, a) {
    return Math.sqrt((r - t) * (r - t) + (a - n) * (a - n))
  };
  //mouse
  var mousePos={
    x:0,
    y:0
  };
  window.onmousemove = function(e) {
    e = e || window.event;

    var pageX = e.pageX - 80;
    var pageY = e.pageY + 150;
    if (pageX === undefined) {
      pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - 80;
      pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop + 150;
    }
    mousePos = {
      x: pageX,
      y: pageY,
    };
  }

  var options = {
    width: window.innerWidth,
    height: window.innerHeight,
    keyword : "404",
    density : 10,
    densityText : 3,
    minDist : 20,
  }
  // initialize canvas
  var canvas = document.createElement('canvas');
  canvas.width = options.width;
  canvas.height = options.height;
  canvas.style.width = options.width/2;
  canvas.style.height = options.height/2;
  canvas.getContext('2d').scale(2,2)

  var renderer = new PIXI.autoDetectRenderer(options.width, options.height, {
    transparent: true
  });
  var stage = new PIXI.Container("0X000000", true);
  document.getElementById("yun").appendChild(renderer.view);
  renderer.view.id = "notFound";

  var imageData = false;
  var particles =[];

  function init() {
    positionParticles();
    positionText();
  }

  function positionParticles() {
    var canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 280;
    var context = canvas.getContext("2d");
    context.fillStyle = "#000000";
    context.font = "240px 'Arial', sans-serif";
    context.fillText(options.keyword, 0, 200);

    var imageData = context.getImageData(0, 0, 280, 400);
    data = imageData.data;

    // Iterate each row and column
    for (var i = 0; i < imageData.height; i += options.density) {
      for (var j = 0; j < imageData.width; j += options.density) {

        // Get the color of the pixel
        var color = data[((j * (imageData.width * 4)) + (i * 4)) - 1];

        // If the color is black, draw pixels
        if (color == 255) {
          var newPar = particle()
          newPar.setPosition(i, j);
          particles.push(newPar);
          stage.addChild(newPar)
        }
      }
    }
  }

  function positionText() {
    var canvas = document.createElement("canvas");
    canvas.width = 320;
    canvas.height = 96;
    var context = canvas.getContext("2d");
    context.fillStyle = "#000000";
    context.font = "64px 'Arial', sans-serif";
    context.fillText("Not Found", 0, 64);

    var imageData = context.getImageData(0, 0, 320, 320);
    data = imageData.data;

    // Iterate each row and column
    for (var i = 0; i < imageData.height; i += options.densityText) {
      for (var j = 0; j < imageData.width; j += options.densityText) {

        // Get the color of the pixel
        var color = data[((j * (imageData.width * 4)) + (i * 4)) - 1];

        // If the color is black, draw pixels
        if (color == 255) {
          var newPar = particle(true)
          newPar.setPosition(i, j);
          particles.push(newPar);
          stage.addChild(newPar)
        }
      }
    }
  }

  function particle(text) {
    $this = new PIXI.Graphics()

    if (text == true) {
      $this.text = true;
    }

    $this.beginFill(0X5CC9F5);

    var radius;
    $this.radius = radius = $this.text ? Math.random() * 3.5 : Math.random() * 10.5;

    $this.drawCircle(0, 0, radius);

    $this.size = this.radius;
    $this.x = -this.width;
    $this.y = -this.height;
    $this.free = false;

    $this.timer = Math2.randomInt(0, 100);
    $this.v = Math2.randomPlusMinus() * Math2.random(.5, 1);
    $this.hovered = false

    $this.alpha = Math2.randomInt(10, 100) / 100;

    $this.vy = -5 + parseInt(Math.random() * 10) / 2;
    $this.vx = -4 + parseInt(Math.random() * 8);

    $this.setPosition = function(x, y) {
      if ($this.text) {
        $this.x = x + (options.width / 2 - 180);
        $this.y = y + (options.height / 2 + 100);
      } else {
        $this.x = x + (options.width / 2 - 250);
        $this.y = y + (options.height / 2 - 175);
      }
    };

    return $this;
  }

  function update() {
    renderer.render(stage);

    for (i = 0; i < particles.length; i++) {
      var p = particles[i];

      if (mousePos.x > p.x && mousePos.x < p.x + p.size && mousePos.y > p.y && mousePos.y < p.y + p.size) {
        p.hovered = true;
      }

      p.scale.x = p.scale.y = scale = Math.max(Math.min(2.5 - (Math2.distance(p.x, p.y, mousePos.x, mousePos.y) / 160), 160), 1);


      p.x = p.x + .2 * Math.sin(p.timer * .15)
      p.y = p.y + .2 * Math.cos(p.timer * .15)
      p.timer = p.timer + p.v;

    }
    window.requestAnimationFrame(update);
  }

  init();
  update();
})
