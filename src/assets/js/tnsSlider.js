(function () {

  // slider first

  if ($('.sliderFirst').length) {

    var slider = tns({
      container: '.sliderFirst',
      loop: false,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderFirstControls",
      responsive: {
        768: {
          items: 2
        },

        990: {
          items: 4
        }
      }

    });

  }


  // slider second

  if ($('.sliderSecond').length) {
    var slider = tns({
      container: '.sliderSecond',
      loop: false,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderSecondControls",
      responsive: {
        768: {
          items: 2
        },
        990: {
          items: 4
        }
      }

    });
  }



  // slider third
  if ($('.sliderThird').length) {
    var slider = tns({
      container: '.sliderThird',
      loop: false,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderThirdControls",
      responsive: {
        768: {
          items: 2
        },
        990: {
          items: 4
        }
      }

    });


  }



  // slider fourth
  if ($('.sliderFourth').length) {
    var slider = tns({
      container: '.sliderFourth',
      loop: false,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderFourthControls",
      responsive: {
        768: {
          items: 2
        },
        990: {
          items: 4
        }
      }

    });


  }


  // slider testimonial
  if ($('.sliderTestimonial').length) {
    var slider = tns({
      container: '.sliderTestimonial',
      loop: false,
      startIndex: 1,
      items: 1,
      nav: false,
      autoplay: true,
      swipeAngle: false,
      speed: 400,
      autoplayButtonOutput: false,
      mouseDrag: true,
      lazyload: true,
      gutter: 20,
      controlsContainer: "#sliderTestimonialControls",
      responsive: {
        768: {
          items: 2
        },
        990: {
          items: 3
        }
      }

    });


  }





})();