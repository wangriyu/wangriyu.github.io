/*
 * Revision History:
 *     Initial: 2018/04/21        Wang RiYu
 */

(function () {
  /*
  * 分享链接的信息
  */
  var title = shareConfig.title, url = shareConfig.url, author = shareConfig.author, img = shareConfig.img, services = shareConfig.services || {};
  var config = [{
    name: 'facebook',
    set: services.facebook != false,
    api: `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(url)}`,
    title: 'Share this article on Facebook',
    icon: 'icon-facebook',
  }, {
    name: 'wechat',
    set: services.wechat != false,
    api: 'weixin://',
    icon: 'icon-wechat'
  }, {
    name: 'twitter',
    set: services.twitter != false,
    api: `https://twitter.com/intent/tweet?source=webclient&amp;original_referer=${encodeURI(url)}&amp;text=${encodeURI(title)}&amp;url=${encodeURI(url)}&amp;related=${encodeURI(author)}&amp;via=${encodeURI(author)}`,
    title: 'Share this article on Twitter',
    icon: 'icon-twitter'
  }, {
    name: 'weibo',
    set: services.weibo != false,
    api: `http://v.t.sina.com.cn/share/share.php?url=${encodeURI(url)}&amp;title=${encodeURI(title)}&amp;content=utf8&amp;pic=${encodeURI(img)}`,
    title: 'Share this article on Weibo',
    icon: 'icon-weibo'
  }, {
    name: 'qq',
    set: services.qq != false,
    api: `http://connect.qq.com/widget/shareqq/index.html?url=${encodeURI(url)}&amp;title=${encodeURI(title)}&amp;pics=${encodeURI(img)}`,
    title: 'Share this article on QQ',
    icon: 'icon-qq'
  }, {
    name: 'qzone',
    set: services.qzone != false,
    api: `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${encodeURI(url)}&amp;title=${encodeURI(title)}&amp;pics=${encodeURI(img)}`,
    title: 'Share this article on Qzone',
    icon: 'icon-CN_tencentqzone'
  }, {
    name: 'douban',
    set: services.douban != false,
    api: `http://www.douban.com/recommend/?url=${encodeURI(url)}&amp;title=${encodeURI(title)}&amp;image=${encodeURI(img)}`,
    title: 'Share this article on Douban',
    icon: 'icon-douban'
  }, {
    name: 'youdao',
    set: services.youdao != false,
    api: `http://note.youdao.com/memory/?title=${encodeURI(title)}&amp;pic=${encodeURI(img)}&amp;url=${encodeURI(url)}`,
    title: 'Share this article on YoudaoNote',
    icon: 'icon-youdaoyunbiji'
  }, {
    name: 'google',
    set: services.google != false,
    api: `https://plus.google.com/share?url=${encodeURI(url)}`,
    title: 'Share this article on Google+',
    icon: 'icon-googleplus'
  }, {
    name: 'linkedin',
    set: services.linkedin != false,
    api: `https://www.linkedin.com/shareArticle?title=${encodeURI(title)}&amp;url=${encodeURI(url)}`,
    title: 'Share this article on LinkedIn',
    icon: 'icon-linkedin'
  }, {
    name: 'copy',
    set: services.copy != false,
    title: 'Copy the link of this article',
    icon: 'icon-link'
  }, {
    name: 'mail',
    set: services.mail != false,
    api: `mailto:?subject=${encodeURI(title)}&quot;&amp;body=permalink:${encodeURI(url)}`,
    title: 'Share this article by email',
    icon: 'icon-email'
  }];

  /*
  * 添加分享图标
  */
  var ul = document.getElementById('social_list');
  config.forEach(function (e) {
    if (JSON.stringify(e) !== '{}' && e.name && e.set) {
      let li = document.createElement('li');
      li.setAttribute('class', `li_item link_${e.name}`);
      switch (e.name) {
        case'wechat': {
          li.innerHTML = `<a class='item' href="${e.api}">
                            <i class='iconfont ${e.icon}'></i>
                            <div id='qrcode'></div>
                          </a>`;
          break
        }
        case'copy': {
          li.innerHTML = `<span id='copyBtn' class='item' title='${e.title}'>
                            <i class='iconfont ${e.icon}'></i>
                            <span class='social_name'>Copy link</span>
                            <textarea id='selection' style='display: none'>${url}</textarea>
                          </span>`;
          break
        }
        default: {
          li.innerHTML = `<a class='item' href="${e.api}" rel='nofollow' target='_blank' title='${e.title}'>
                            <i class='iconfont ${e.icon}'></i>
                            <span class='social_name'>${e.name === 'qq' ? 'QQ' : e.name}</span>
                          </a>`;
        }
      }
      ul.appendChild(li)
    }
  })

  /*
  * 添加复制的弹框
  */
  if (services.copy != false) {
    var container = document.getElementsByClassName('social_share')[0], divEle = document.createElement('div');
    divEle.id = 'modal-container';
    divEle.innerHTML = `<div class="modal-background">
                          <div class="modal">
                            <h2>Copy Link !</h2>
                            <p id="link"></p>
                            <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                              <rect x="0" y="0" fill="none" width="360" height="162" rx="3" ry="3"></rect>
                            </svg>
                          </div>
                        </div>`
    container.appendChild(divEle);

    document.getElementById('copyBtn').onclick = function () {
      var input = document.createElement('input'); // fix ios safari copy event
      input.setAttribute('readonly', 'readonly');
      input.setAttribute('value', url);
      document.body.appendChild(input);
      if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        input.setSelectionRange(0, input.value.length);
        document.getElementById('link').textContent = url;
      } else {
        document.getElementById('selection').select();
      }
      document.execCommand("copy") || (document.getElementById("link").textContent="Failed！");
      document.getElementById('modal-container').setAttribute('class', 'sketch');
      document.body.removeChild(input);
    }

    document.getElementById('copyBtn').oncopy = function (event) {
      if (!-[1,]) {
        if (window.clipboardData) {
          window.clipboardData.setData('Text', url);
          document.getElementById('link').textContent = window.clipboardData.getData('Text')
        }
      } else {
        event.preventDefault()
        if (event.clipboardData) {
          event.clipboardData.setData('text/plain', url);
          document.getElementById('link').textContent = event.clipboardData.getData('text')
        }
      }
    }

    document.getElementById('modal-container').onclick = function hideModal () {
      document.getElementById('modal-container').setAttribute('class', 'sketch out')
    }
  }

  /*
  * 微信二维码
  */
  document.onload = (function genQRCode (url) {
    if (services.wechat != false) {
      return new QRCode('qrcode', {
        text: url,
        width: 128,
        height: 128,
        colorDark: '#666',
        colorLight: '#fff',
        correctLevel: QRCode.CorrectLevel.M
      })
    }
  })(`${encodeURI(url)}#.WthZlpz1y-Y.wechat`)
})()
