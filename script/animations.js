// gsap.registerPlugin(ScrollTrigger);

$(document).ready(function () {
    $('.header .nav a').click((e) => {
        switch (e.target.innerText) {
            case "about":
                break;
            case "education":
                break;
            case "portfolio":
                break;
            case "contact":
                break;
        }
    });

    //H1
    const mainHeading = document.querySelectorAll('h1');
    mainHeading.forEach(header => {
        gsap.fromTo(header,
            {
                x: 200,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power4.out",
                scrollTrigger: {
                    id: "h1",
                    trigger: header,
                    start: "center 90%",
                    end: "center 10%",
                    toggleActions: "play complete none reset",
                },
                onStart: () => ScrollTrigger.refresh(),
                onComplete: () => ScrollTrigger.refresh()
            })
    })
    //H4
    const subsectionHeading = document.querySelectorAll('h4');
    subsectionHeading.forEach(header => {
        gsap.fromTo(header,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.4,
                scrollTrigger: {
                    id: "h4",
                    trigger: header,
                    start: "center 90%",
                    end: "center 10%",
                    toggleActions: "play complete none reset",
                },
                onStart: () => ScrollTrigger.refresh(),
                onComplete: () => ScrollTrigger.refresh()
            })
    })

    //TIMELINE
    const time = gsap.timeline();
    const timelineEvent = document.querySelectorAll('.timeline-event');
    const timelineLine = document.querySelector('.timeline');

    gsap.from(timelineLine,
        {
            height: 0,
            duration: 1,
            ease: "bounce.inOut",
            scrollTrigger: {
                id: "line",
                trigger: timelineLine,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play complete none none",
            },
            onStart: () => ScrollTrigger.refresh(),
            onComplete: () => ScrollTrigger.refresh()
        }
    );
    timelineEvent.forEach(event => {
        gsap.from(event,
            {
                opacity: 0,
                scrollTrigger: {
                    id: "event",
                    trigger: event,
                    start: "top 60%",
                    end: "bottom 40%",
                    toggleActions: "play complete none none",
                },
                onStart: () => ScrollTrigger.refresh(),
                onComplete: () => ScrollTrigger.refresh()
            })
    });

    //SKILLS
    const skillsSection = document.querySelector('.skills');
    const skillsItem = document.querySelectorAll(".skills .col-sm-4")
    gsap.from(skillsItem,
        {
            opacity: 0,
            toggleActions: "play pause resume reset",
            scrollTrigger: {
                trigger: skillsSection,
                start: "center 70%",
                end: "70% 30%",
            },
            onStart: () => ScrollTrigger.refresh(),
            onComplete: () => ScrollTrigger.refresh()
        }
    );
});
