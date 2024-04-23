gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      markers: false,
    });

    // Card hover animation
    $(".card").on("mouseenter", function () {
      let tl = gsap.timeline({}); 
      const bgColor = $(this).css("background-color");

      if ($(this).hasClass("shorter")) {
        tl.to(
          $(this).find(".short-card__heading"),
          {
            opacity: 0,
          },
          0,
        );
        tl.to(
          $(this).find(".short-card__text"),
          {
            opacity: 1,
          },
          0.1,
        );
        return;
      }
      tl.fromTo(
        $(this),
        {
          borderRadius: "2.34em",
        },
        {
          borderRadius: "0em",
          duration: 0.5,
          backgroundColor: "transparent",
        },
      );
      tl.to(
        $(this).find(".card-heading"),
        {
          color: "#f7f7f5",
        },
        0,
      );
      tl.to(
        $(this).find(".card-image"),
        {
          opacity: "100%",
        },
        0,
      );
    });
    $(".card").on("mouseleave", function () {
      let bgColor = "#1C1C1C";
      let tl = gsap.timeline({});

      if ($(this).hasClass("is--green")) {
        bgColor = "#918A7D";
      }
      if ($(this).hasClass("is--orange")) {
        bgColor = "#D75540";
      }
      if ($(this).hasClass("is--light-green")) {
        bgColor = "#CCCABE";
      }

      if ($(this).hasClass("shorter")) {
        tl.to(
          $(this).find(".short-card__heading"),
          {
            opacity: 1,
          },
          0,
        );
        tl.to(
          $(this).find(".short-card__text"),
          {
            opacity: 0,
          },
          0,
        );
        return;
      }

      tl.fromTo(
        $(this),
        {
          borderRadius: "0em",
          backgroundColor: "transparent",
        },
        {
          borderRadius: "2.34em",
          backgroundColor: bgColor,
          duration: 0.5,
        },
      );
      tl.to(
        $(this).find(".card-heading"),
        {
          color: "transparent",
        },
        0,
      );
      tl.fromTo(
        $(this).find(".card-image"),
        {
          opacity: "100%",
        },

        {
          opacity: "0%",
          duration: 0.3,
        },
        0,
      );
    });

    // Text & GSAP animations

    window.addEventListener("DOMContentLoaded", (event) => {
      // Split text into spans
      let typeSplit = new SplitType("[text-split]", {
        types: "words, chars",
        tagName: "span",
      });

      // Link timelines to scroll position
      function createScrollTrigger(triggerElement, timeline) {
        // Reset tl when scroll out of view past bottom of screen
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top bottom",
          onLeaveBack: () => {
            timeline.progress(0);
            timeline.pause();
          },
        });
        // Play tl when scrolled into view (60% from top of screen)
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top 60%",
          onEnter: () => timeline.play(),
        });
      }

      // No delay ScrollTrigger  function createScrollTrigger(triggerElement, timeline) {
      function createScrollTriggerNoDelay(triggerElement, timeline) {
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top bottom",
          onLeaveBack: () => {
            timeline.progress(0);
            timeline.pause();
          },
        });
        // Play tl when scrolled into view (60% from top of screen)
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top bottom",
          onEnter: () => timeline.play(),
        });
      }

      // No delay ScrollTrigger  function createScrollTrigger(triggerElement, timeline) {
      function createScrollTriggerInstant(triggerElement, timeline) {
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top top",
          onLeaveBack: () => {
            timeline.progress(0);
            timeline.pause();
          },
        });
        // Play tl when scrolled into view (60% from top of screen)
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top bottom",
          onEnter: () => timeline.play(),
        });
      }

      $(".in-left").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), {
          y: "10px",
          x: "-50px",
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          stagger: { amount: 0.5 },
          delay: 0.5,
        });
        createScrollTrigger($(this), tl);
      });
      $(".fade-in").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), {
          y: "10px",
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: { amount: 0.5 },
          delay: 0.5,
        });
        createScrollTriggerNoDelay($(this), tl);
      });
      $(".about-points").each(function (index) {
        let targetElement = ".about-points__point";
        let tl = gsap.timeline({ paused: true });
        tl.from($(targetElement), {
          y: "20px",
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: { amount: 0.5 },
          delay: 0.5,
        });
        createScrollTriggerNoDelay($(this), tl);
      });

      $(".in-right").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".animate"), {
          y: "10px",
          x: "50px",
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          stagger: { amount: 0.5 },
          delay: 0.5,
        });
        createScrollTrigger($(this), tl);
      });
      $(".fade-in-section").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".animate"), {
          y: "10px",
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: { amount: 0.5 },
          delay: 0.5,
        });
        createScrollTrigger($(this), tl);
      });
      $("[letters-slide-down]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".char"), {
          yPercent: -120,
          duration: 0.3,
          ease: "power1.out",
          stagger: { amount: 0.7 },
        });
        createScrollTrigger($(this), tl);
      });
      $("[letters-slide-down-instant]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".char"), {
          yPercent: -120,
          duration: 0.3,
          ease: "power1.out",
          stagger: { amount: 0.7 },
        });
        createScrollTriggerInstant($(this), tl);
      });

      $("[letters-slide-down-instant-on-load]").each(function (index) {
        let tl = gsap.timeline({ duration: 0.3, ease: "power3.inOut", delay: 1 });
        tl.fromTo($(this).find(".char"), {
          yPercent: -120,
          stagger: 0.7 ,
        },
        {
          yPercent: 0,
        });
      });

      $("[letters-fade-in]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".char"), {
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
          stagger: { amount: 0.8 },
        });
        createScrollTrigger($(this), tl);
      });

      // Avoid flash of unstyled content
      gsap.set("[text-split]", { opacity: 1 });
    });

    // Logo animation
    $(".hp-hero").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(".hp-hero__logo");
      let fillLogo = $(".homepage-logo__fill");
      let outlineLogo = $(".homepage-logo__transparent");
      let textElement = $(".hp-hero__text");
      var logoTop = 0;
      var textTop = 0;
      var endTop = 0;
      var ww = window.innerWidth;

      if (ww > 991) {
        logoTop = "16.68vw";
        textTop = "35.68vw";
        endTop = "1.45em";
      } else if ( (ww <= 991) && (ww >= 769) ) {
        logoTop = "16.68vw";
        textTop = "40.68vw";
        endTop = "3vw";
      } else if ( (ww <= 768) && (ww >= 498) ) {
        logoTop = "26.68vw";
        textTop = "50.68vw";
      } else if (ww <= 497) {
        logoTop = "56.68vw";
        textTop = '85.68vw';
        endTop = "5vw";
      }

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: "bottom 100%",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.fromTo(
        targetElement,
        {
          width: "79.37em",
          top: logoTop,
        },
        {
          width: "9.63em",
          top: endTop,
        },
      );
      tl.fromTo(
        textElement,
        {
          top: textTop,
          scale:1,
        },
        {
          top: endTop,
          scale:0,
        },
        0
      );
      tl.to(
        fillLogo,
        {
          opacity: 1,
          duration: 0.5,
        },
        0,
      );
    });
