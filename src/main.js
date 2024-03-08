const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

// STICKY NAVIGATION
const categorySectionEl = document.querySelector(".choose-category-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky-header");
    } else {
      document.body.classList.remove("sticky-header");
    }
  },
  {
    root: null,
    // It will work, as soon as 0% of the categorySection is inside the viewport.
    threshold: 0,
  }
);
obs.observe(categorySectionEl);
