gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
$(".navbar-brand").click(() => {
    gsap.to(window, {
        duration: 1.5,
        ease: "expo",
        scrollTo: "body"
    })
})
$(".footer a").click(() => {
    gsap.to(window, {
        duration: 1.5,
        ease: "expo",
        scrollTo: "body"
    })
})
$(".nav li").click((section) => {
    gsap.to(window, {
        duration: 1,
        ease: "power4.inOut",
        scrollTo: {
            y: "#" + section.target.innerHTML,
            offsetY: 50
        }
    })
})

const homeTimeline = gsap.timeline({ delay: 0.1, deafults: { duration: 3 } });
homeTimeline.fromTo(".welcome-div",
    {
        yPercent: -430,
    },
    {
        yPercent: 0,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".welcome-div",
            start: "center 70%",
            end: "center top",
            toggleActions: "play complete none none"
        }
    });

homeTimeline.fromTo(".photo-div",
    {
        yPercent: 500,
        opacity: 0,
    },
    {
        yPercent: 0,
        opacity: 1,
    }, "<");

homeTimeline.to(".first-angles",
    {
        xPercent: 500,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".home",
            start: "70% 80%",
            end: "bottom top",
            scrub: 0.6,
        },

    })
homeTimeline.to(".second-angles",
    {
        yPercent: -400,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".home",
            start: "70% 90%",
            end: "bottom top",
            scrub: 1,
        }
    })
const quoteTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".quote-text",
        start: "center 90%",
        end: "center 10%",
        toggleActions: "play reverse play reverse",
    },
    defaults: { ease: "power4.inOut", duration: 1.2, }
});
quoteTimeline.fromTo(".quote-body",
    {
        xPercent: -200,
        opacity: 0,
    }, {
    xPercent: 0,
    opacity: 1,
});
quoteTimeline.fromTo(".quote-author", {
    xPercent: 80,
    opacity: 0,
}, {
    xPercent: 0,
    opacity: 1,
}, "<");

const h1List = document.querySelectorAll("h1");
h1List.forEach(h1 => {
    gsap.from($(h1), {
        xPercent: 20,
        opacity: 0,
        ease: "power3.out",
        duration: 0.5,
        scrollTrigger: {
            trigger: h1,
            toggleActions: "play none play reverse",
            fastScrollEnd: true,
        },
        onStart: () => ScrollTrigger.refresh(),
        onComplete: () => ScrollTrigger.refresh(),
    })
})
gsap.fromTo('#about p', {
    opacity: 0,
}, {
    opacity: 1,
    stagger: 0.5,
    duration: 1.5,
    scrollTrigger: {
        trigger: '#about',
        start: "top 90%",
        end: "bottom 10%",
    }
})
const educationTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#education",
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play complete none none"
    }, defaults: { duration: 1.5, }
});
educationTimeline.from(".timeline", {
    height: 0,
    ease: "power1.out"
});

educationTimeline.fromTo(".timeline-event", {
    opacity: 0,
}, {
    opacity: 1,
    stagger: 0.3,
}, "<");
educationTimeline.fromTo(".skills .col-sm-4", {
    opacity: 0,
}, {
    opacity: 1,
    stagger: {
        amount: 0.5,
        from: "edges",
        grid: "auto",
        ease: "power2.Out",
    }
});

const graphicTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".graphic-portfolio",
        end: "bottom 20%",
        start: "top 80%",
    }, deafults: { duration: 2, }
});
graphicTimeline.fromTo(".graphic-portfolio h4", {
    yPercent: 30,
    opacity: 0,
    scale: 0.7,
    ease: "expo",
}, {
    yPercent: 0,
    scale: 1,
    opacity: 1,
})
graphicTimeline.fromTo('.description', {
    xPercent: -200,
    opacity: 0,
}, {
    xPercent: 0,
    opacity: 1,
});
graphicTimeline.fromTo('.frame', {
    scale: 0.7,
    opacity: 0
}, {
    scale: 1,
    opacity: 1,
    stagger: {
        amount: 1,
        from: "end",
        ease: "power4.inOut",
    }
})
const programmingTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".programming-portfolio",
        end: "bottom 20%",
        start: "top 80%",
    }, deafults: { duration: 2, }
});
programmingTimeline.fromTo(".programming-portfolio h4", {
    yPercent: 30,
    opacity: 0,
    scale: 0.7,
    ease: "expo",
}, {
    yPercent: 0,
    scale: 1,
    opacity: 1,
})
programmingTimeline.fromTo(".program-box", {
    scale: 0.7,
    opacity: 0
}, {
    scale: 1,
    opacity: 1,
    stagger: {
        amount: 1,
        from: "start",
        ease: "power4.inOut",
    }
})