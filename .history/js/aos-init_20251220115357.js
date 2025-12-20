// js/aos-init.js
function initAOS() {
  if (!window.AOS) return;

  AOS.init({
    delay: 0,
    duration: 1000,
    once: true,
  });

  // dùng cho includeHTML
  AOS.refreshHard();
}
