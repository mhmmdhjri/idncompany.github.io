const vid = document.getElementById("street");

window.addEventListener("scroll", function() {
    const scrollPosition = window.pageYOffset;
    vid.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});

document.addEventListener("DOMContentLoaded", function() {
  CustomEase.create("custom", "M0,0,C0,0.8,0.139,0.86,0.224,0.918,0.344,1,0.504,1,1,1");

  for (let i = 1; i <= 8; i++) {
    const elementClass = `.big-header-${i}`;
    const animationDelay = 0.5 + (i - 1) * 0.06;
    
    gsap.from(elementClass, {
      y: -400,
      duration: 0.9,
      delay: animationDelay,
      ease: "custom"
    });
  }

  gsap.to(".opening", {y: -830, opacity: 0, duration: 1, delay: 3, ease: CustomEase.create("custom", "M0,0 C0.7,0 0.198,1 1,1 ")});
  gsap.to(".the-header", {y: 400, duration: 1, delay: 3, ease: CustomEase.create("custom", "M0,0 C0.7,0 0.198,1 1,1 ")})
  gsap.from(".background", {y: 800, duration: 1, delay: 3, ease: CustomEase.create("custom", "M0,0 C0.7,0 0.198,1 1,1 ")});
});
