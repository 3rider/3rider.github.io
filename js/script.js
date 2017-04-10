(function() {
  $(document).ready(function() {
    hljs.initHighlightingOnLoad();
    setTimeout(function() {
      return $('input.gsc-input').attr('placeholder', '搜尋文章／內容／標籤？');
    }, 1000);
    return window.addEventListener('scroll', function(e) {
      var distanceY, header, shrinkOn;
      distanceY = window.pageYOffset || document.documentElement.scrollTop;
      shrinkOn = 200;
      header = document.querySelector('#mobile-site-header');
      if (distanceY > shrinkOn) {
        if (!classie.has(header, 'show')) {
          return classie.add(header, 'show');
        }
      } else {
        if (classie.has(header, 'show')) {
          return classie.remove(header, 'show');
        }
      }
    });
  });

}).call(this);
