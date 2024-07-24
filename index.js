let lenis;
let percentage;

const progressBar = {
  element: document.querySelector(".section_bar"),
  line: document.querySelector(".section_bar_line_filled"),
  dots: document.querySelector(".section_bar_line_dot"),
  labels: document.querySelector(".section_bar_label_item"),
};

const progressBarOffset =
  (progressBar.element.getBoundingClientRect().left / window.innerWidth) * 100;

const video = document.querySelector(".section_bg_video");

const isMoblie = window.matchMedia("(max-width: 768px)").matches;

const initLenis = () => {
  lenis = new Lenis({
    lerp: 0.05,
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: true,
    touchMultiplier: 2,

    content: document.querySelector(".section_content"),
    orientation: isMoblie ? "vertical" : "horizontal",
  });

  lenis.on("scroll", ({ scroll, limit }) => progress(scroll, limit));

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
};

const activateKeypoints = (keypoints, element) => {};

const progress = (scroll, limit) => {};

window.addEventListener("DOMContentLoaded", () => {
  initLenis();
  lenis.scrollTo(0);
  video.play();
});
