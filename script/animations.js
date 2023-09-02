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

const hackingAnimation = (container) => {
    let iteration = 0;
  
    clearInterval(interval);
    
    interval = setInterval(() => {
      container.innerText = container.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return container.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= container.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
}
const hacking_container = document.getElementById("hacking-animation");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();

let interval = null;

const textContainer = document.getElementById("typing-animation");
let index = 0;
let text = textContainer.dataset.value;
let typingAnimationInterval = null;

function animateText() {
    let done = false;
    typingAnimationInterval = setInterval(()=>{
        textContainer.textContent = textContainer.dataset.value.substring(0, index);
        index++;
      
        if (index > text.length) {
          clearInterval(typingAnimationInterval);
          document.getElementById("karetka").style.marginLeft = (index) + "px";
        }
        else{
            done = true;
        }
    }, 180);
    if(done) {
        console.log("DONE");
    }
}

const homeTimeline = gsap.timeline({ delay: 0.1, onStart:animateText, deafults: { duration: 3 } });
// homeTimeline.fromTo(".welcome-div",
//     {
//         yPercent: -430,
//     },
//     {
//         yPercent: 0,
//         ease: "power1.out",
//         scrollTrigger: {
//             trigger: ".welcome-div",
//             start: "center 70%",
//             end: "center top",
//             toggleActions: "play complete none none"
//         }
//     });
// homeTimeline.fromTo(".photo-div",
//     {
//         yPercent: 500,
//         opacity: 0,
//     },
//     {
//         yPercent: 0,
//         opacity: 1,
//     }, "<");
//     homeTimeline.from(".small-welcome",
//     {
//             xPercent: 500,
//             opacity: 0
//         }, "<");
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
            start: "80% 90%",
            end: "bottom top",
            scrub: 1,
        }
    })
// const quoteTimeline = gsap.timeline({
// const quoteTimeline = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".quote-text",
//         start: "10% 90%",
//         end: "90% 30%",
//         toggleActions: "play reverse play reverse",
//         // markers: true,
//     },
//     defaults: { ease: Expo.easeIn, duration: 1, }
// });
// quoteTimeline.fromTo(".quote-body",
//     {
//         xPercent: -400,
//         opacity: 0,
//     }, 
//     {
//     xPercent: 0,
//     opacity: 1,
//         trigger: ".quote-text",
//         start: "10% 90%",
//         end: "90% 30%",
//         toggleActions: "play reverse play reverse",
//         // markers: true,
//     },
//     defaults: { ease: Expo.easeIn, duration: 1, }
// });
// quoteTimeline.fromTo(".quote-body",
//     {
//         xPercent: -400,
//         opacity: 0,
//     }, 
//     {
//     xPercent: 0,
//     opacity: 1,
// });
// quoteTimeline.fromTo(".quote-author", 
// {
//     xPercent: 100,
//     opacity: 0,
// },{
//     xPercent: 0,
//     opacity: 1,
// }, "<");

// const h1List = document.querySelectorAll("h1");
// h1List.forEach(h1 => {
//     gsap.from($(h1), {
//         xPercent: 5,
//         opacity: 0,
//         ease: "power3.out",
//         duration: 0.5,
//         scrollTrigger: {
//             trigger: h1,
//             toggleActions: "play none play reverse",
//             fastScrollEnd: true,
//         },
//         onStart: () => ScrollTrigger.refresh(),
//         onComplete: () => ScrollTrigger.refresh(),
//     })
// })

// $(document).ready();

window.onload = function () {
    animateText();
    document.getElementById("hacking-animation").onmouseover = event => hackingAnimation(hacking_container);
    
    document.querySelectorAll('.portfolio-type').forEach(type =>{ type.onmouseover = event =>{
        hackingAnimation(type);
    } 
    });
}