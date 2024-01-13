gsap.registerPlugin(ScrollTrigger);

(function($) {
  $(document).ready(function() {
    initialiseApp();

    function initialiseApp() {
      initialiseGSAPScrollTriggerPinningHorizontal();
      initialiseLenisScroll();
    }

    function initialiseGSAPScrollTriggerPinningHorizontal() {
      let sectionSub             =   document.querySelector('#section_sub');

      let containerAnimation = gsap.to(sectionSub, {
        scrollTrigger: {
          trigger: '#section_main',
          start: 'top top',
          end: () => "+=" + sectionSub.offsetWidth,
          pin: true,
          scrub: true,
        },
        x: () => -(sectionSub.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: 'none'
      });

      var socialWrappers = sectionSub.querySelectorAll('.image_wrapper');

      socialWrappers.forEach(socialWrapper => {
        var socialWrapper = socialWrapper.id;

        gsap.to(socialWrapper, {
          scrollTrigger: {
            trigger: socialWrapper,
            start: 'left center',
            end: 'right center',
            containerAnimation: containerAnimation,
            toggleClass: {
              targets: '.' + socialWrapperID,
              className: 'active'
            }
          }
        });
      });
    }

    function initialiseLenisScroll() {
      const lenis = new Lenis({
        smoothWheel: true,
        duration: 1.2
      });

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }
  });
}) (jQuery);
