;(function (window) {
  /**
   * GridLoaderFx obj.
   */
  function GridLoaderFx (el, options) {
    this.el = el
    this.items = this.el.querySelectorAll('.grid__item > .grid__link')
  }

  /**
   * Effects.
   */
  GridLoaderFx.prototype.effects = {
    'Montu': {
      perspective: 800, origin: '50% 0%', animeOpts: {
        duration: 1500, elasticity: 400, delay: function (t, i) {
          return i * 75
        }, opacity: {
          value: [0, 1], duration: 1000, easing: 'linear'
        }, rotateX: [-90, 0]
      }
    },
  }

  GridLoaderFx.prototype._render = function (effect) {
    // Reset styles.
    this._resetStyles()

    var self = this, effectSettings = this.effects[effect], animeOpts = effectSettings.animeOpts

    if (effectSettings.perspective != undefined) {
      [].slice.call(this.items).forEach(function (item) {
        item.parentNode.style.WebkitPerspective = item.parentNode.style.perspective = effectSettings.perspective + 'px'
      })
    }

    if (effectSettings.origin != undefined) {
      [].slice.call(this.items).forEach(function (item) {
        item.style.WebkitTransformOrigin = item.style.transformOrigin = effectSettings.origin
      })
    }

    if (effectSettings.lineDrawing != undefined) {
      [].slice.call(this.items).forEach(function (item) {
        // Create SVG.
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
          path = document.createElementNS('http://www.w3.org/2000/svg', 'path'), itemW = item.offsetWidth,
          itemH = item.offsetHeight

        svg.setAttribute('width', itemW + 'px')
        svg.setAttribute('height', itemH + 'px')
        svg.setAttribute('viewBox', '0 0 ' + itemW + ' ' + itemH)
        svg.setAttribute('class', 'grid__deco')
        path.setAttribute('d', 'M0,0 l' + itemW + ',0 0,' + itemH + ' -' + itemW + ',0 0,-' + itemH)
        path.setAttribute('stroke-dashoffset', anime.setDashoffset(path))
        svg.appendChild(path)
        item.parentNode.appendChild(svg)
      })

      var animeLineDrawingOpts = effectSettings.animeLineDrawingOpts
      animeLineDrawingOpts.targets = this.el.querySelectorAll('.grid__deco > path')
      anime.remove(animeLineDrawingOpts.targets)
      anime(animeLineDrawingOpts)
    }

    if (effectSettings.revealer != undefined) {
      [].slice.call(this.items).forEach(function (item) {
        var revealer = document.createElement('div')
        revealer.className = 'grid__reveal'
        if (effectSettings.revealerOrigin != undefined) {
          revealer.style.transformOrigin = effectSettings.revealerOrigin
        }
        if (effectSettings.revealerColor != undefined) {
          revealer.style.backgroundColor = effectSettings.revealerColor
        }
        item.parentNode.appendChild(revealer)
      })

      var animeRevealerOpts = effectSettings.animeRevealerOpts
      animeRevealerOpts.targets = this.el.querySelectorAll('.grid__reveal')
      animeRevealerOpts.begin = function (obj) {
        for (var i = 0, len = obj.animatables.length; i < len; ++i) {
          obj.animatables[i].target.style.opacity = 1
        }
      }
      anime.remove(animeRevealerOpts.targets)
      anime(animeRevealerOpts)
    }

    if (effectSettings.itemOverflowHidden) {
      [].slice.call(this.items).forEach(function (item) {
        item.parentNode.style.overflow = 'hidden'
      })
    }

    animeOpts.targets = effectSettings.sortTargetsFn && typeof effectSettings.sortTargetsFn === 'function' ? [].slice.call(this.items).sort(effectSettings.sortTargetsFn) : this.items
    anime.remove(animeOpts.targets)
    anime(animeOpts)
  }

  GridLoaderFx.prototype._resetStyles = function () {
    this.el.style.WebkitPerspective = this.el.style.perspective = 'none';
    [].slice.call(this.items).forEach(function (item) {
      var gItem = item.parentNode
      item.style.opacity = 0
      item.style.WebkitTransformOrigin = item.style.transformOrigin = '50% 50%'
      item.style.transform = 'none'

      var svg = item.parentNode.querySelector('svg.grid__deco')
      if (svg) {
        gItem.removeChild(svg)
      }

      var revealer = item.parentNode.querySelector('.grid__reveal')
      if (revealer) {
        gItem.removeChild(revealer)
      }

      gItem.style.overflow = ''
    })
  }

  window.GridLoaderFx = GridLoaderFx

  var body = document.body, grids = [].slice.call(document.querySelectorAll('.grid')), masonry = [], currentGrid = 0, loaders = [], loadingTimeout;

  function init () {
    // Preload images
    imagesLoaded(body, function () {
      // Initialize Masonry on each grid.
      grids.forEach(function (grid) {
        var m = new Masonry(grid, {
          itemSelector: '.grid__item',
          columnWidth: '.grid__sizer',
          percentPosition: true,
          transitionDuration: 100
        })
        masonry.push(m)

        // Init GridLoaderFx.
        loaders.push(new GridLoaderFx(grid))
      })
      applyFx()
    })
  }

  function applyFx (ev) {
    // Simulate loading grid to show the effect.
    clearTimeout(loadingTimeout)

    loadingTimeout = setTimeout(function () {
      document.getElementById('content').classList.remove('grid--loading')
      grids[currentGrid].classList.remove('grid--hidden')
      document.getElementById('blog').style.display = 'block'
      document.getElementById('top').style.display = 'block'
      // Apply effect.
      loaders[currentGrid]._render('Montu')
    }, 3000)
  }
  init()
})(window)