(function() {
  $(document).ready(function() {
    var hideBlocks, offset, showBlocks, timelineBlocks;
    hljs.initHighlightingOnLoad();
    timelineBlocks = $('.cd-timeline-block');
    offset = 0.8;
    hideBlocks = function(blocks, offset) {
      blocks.each(function() {
        console.log($(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden'));
        $(this).offset().top > $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
      });
    };
    showBlocks = function(blocks, offset) {
      blocks.each(function() {
        $(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
      });
    };
    hideBlocks(timelineBlocks, offset);
    $(window).on('scroll', function() {
      if (!window.requestAnimationFrame) {
        setTimeout((function() {
          showBlocks(timelineBlocks, offset);
        }), 100);
      } else {
        window.requestAnimationFrame((function() {
          showBlocks(timelineBlocks, offset);
        }));
      }
    });
  });

}).call(this);
