
function homepageanimation() {

    gsap.set(".slmm", {
        scale: 5
    })
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        },
    })

    tl.to(".vdiv", {
        '--clip': "0%",
        ease: Power2,
    }, 'a')
    tl.to(".slmm", {
        scale: 1,

        ease: Power2,
    }, 'a')

    tl.to(".lft", {
        xPercent: -15,
        stagger: .03,
        ease: Power4
    }, 'b')
    tl.to(".rgt", {
        xPercent: 15,
        stagger: .03,
        ease: Power4
    }, 'b')
}

function horizontal() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".hor-scroll",
            start: "top top",
            end: "bottom bottom",
            scrub: 1

        },
        xPercent: -310,
        ease: Power4
    })
}

function teamanimation() {
    document.querySelectorAll(".listelem").forEach(function (el) {
        el.addEventListener("mousemove", function (dets) {

            gsap.to(this.querySelector(".picture"), {
                scale: 1.5,
                ease: Power4,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                y: gsap.utils.mapRange(0, window.innerHeight, -70, 70, dets.clientY)
            }
            )
        })
        el.addEventListener("mouseleave", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                scale: 0,
                ease: Power4,
            }
            )
        })
    });

}

function paraanimation(params) {
    var clutter = ""
    document.querySelector(".alfaz")
        .textContent.split("").forEach(function (e) {
            if (e === " ") clutter += `<span >&nbsp;</span>`
            clutter += `<span >${e}</span>`
        })
    document.querySelector(".alfaz").innerHTML = clutter;

    gsap.set(".alfaz span", { opacity: 0.3 })
    gsap.to(".alfaz span", {
        scrollTrigger: {
            trigger: ".testimonials",
            start: "top 60%",
            end: "bottom 90%",
            scrub: 1,
        },
        opacity: 1,
        stagger: 0.3,
        ease: Power4
    })
}

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsule(params) {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70",
            end: "bottom bottom",
            scrub: 1
        },
        y: 0,
        ease: Power4,
    })
}


function colorchange() {
    document.querySelectorAll("section").forEach(function (e, index, sections) {
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: function () {
                document.body.setAttribute("theme", e.dataset.color);
                sections.forEach((section, i) => {
                    gsap.to(section, {
                        opacity: i === index ? 1 : 0.05, // Full opacity for current section, reduced for others
                        duration: 0.5 // Smooth transition
                    });
                });
            },
            onEnterBack: function () {
                document.body.setAttribute("theme", e.dataset.color);
                sections.forEach((section, i) => {
                    gsap.to(section, {
                        opacity: i === index ? 1 : 0.05, // Full opacity for current section, reduced for others
                        duration: 0.5 // Smooth transition
                    });
                });
            }
        });
    });
    

}



colorchange()

loco()
paraanimation()
homepageanimation()
horizontal()
teamanimation()
capsule()
