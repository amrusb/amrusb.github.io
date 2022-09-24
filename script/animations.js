gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
$(".navbar-brand").click(() => {
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
        yPercent: 230,
        opacity: 0.3,
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
            scrub: 1,
        },

    },)
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
const quoteTimeline = gsap.timeline();
quoteTimeline.from(".quote-body",
    {
        xPercent: -100,
        opacity: 0,
        scrollTrigger: {
            trigger: ".quote-text",
            start: "center 90%",
            end: "center 10%",
            toggleActions: "play reverse play reverse"
        },
    });
quoteTimeline.from(".quote-author", {
    xPercent: 50,
    opacity: 0,
    scrollTrigger: {
        trigger: ".quote-text",
        start: "center 90%",
        end: "center 10%",
        toggleActions: "play reverse play reverse"
    },
}, "<");

const h1List = document.querySelectorAll("h1");
h1List.forEach(h1 => {
    gsap.from($(h1), {
        xPercent: 20,
        opacity: 0,
        ease: "power2.out",
        duration: 1.5,
        scrollTrigger: {
            trigger: h1,
            toggleActions: "play reverse play reverse",
            fastScrollEnd: true,
        },
        onStart: () => ScrollTrigger.refresh(),
        onComplete: () => ScrollTrigger.refresh(),
    })
})
