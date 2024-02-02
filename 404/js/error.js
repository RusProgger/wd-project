$('.mouse-parallax').on('mousemove', (e) => {
   const x = e.pageX / $(window).width();
   const y = e.pageY / $(window).height();

   $('.mouse-parallax__background').css('transform', 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)');

   $('.mouse-parallax__content').css('transform', 'translate(' + x * 50 + 'px, ' + y * 50 + 'px)');
});