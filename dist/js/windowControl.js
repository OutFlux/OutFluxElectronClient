'use strict';

// scroll the horizontal lists
setTimeout(() => {
  document.querySelectorAll(".list").forEach(el => {
    // left arrow
    el.children[0].children[2].onmousedown = _ => {
      el.children[1].children[0].scrollBy({
        top: 0,
        left: -100,
        behavior: 'smooth'
      });
    };

    // right arrow
    el.children[0].children[1].onmousedown = _ => {
      el.children[1].children[0].scrollBy({
        top: 0,
        left: 100,
        behavior: 'smooth'
      });
    };
  });
}, 3000);
//# sourceMappingURL=windowControl.js.map