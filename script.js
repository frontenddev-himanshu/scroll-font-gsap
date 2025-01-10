let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        start: "0% 90%",
        end: "200% 90%",
        // markers: true,
        scrub: true,
    }
});

tl.to(".second", {
    x: 450,
}, 'a')
tl.to(".first", {
    x: -450,
}, 'a')
