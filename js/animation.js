window.sr = ScrollReveal()

sr.reveal(".navbar", {
    delay:300,
    opacity:1,
    origin:"top",
    distance:"100%",
    duration:1000
});

sr.reveal(".top-section", {
    delay:300,
    opacity:1,
    origin:"right",
    distance:"100%",
    duration:2500
});

sr.reveal(".about-section h1", {
    delay:300,
    duration:1500
});

sr.reveal(".about-section ul", {
    delay:700,
    origin:"bottom",
    distance:"50%",
    duration:1000
});

sr.reveal(".contact-section ul li", {
    delay:300,
    scale:0,
    duration:2000
});