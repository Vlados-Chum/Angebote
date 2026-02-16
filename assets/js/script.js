"use strict";

// SPOLLERS 

document.addEventListener("DOMContentLoaded", () => {
  const spollers = document.querySelectorAll(".spoller");

  spollers.forEach(spoller => {
    const buttons = spoller.querySelectorAll(".spoller__quastionare");
    const wrapper = spoller.querySelector(".spoller__wrapper");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {

        const isOpen = wrapper.style.maxHeight;

        spollers.forEach(item => {
          const w = item.querySelector(".spoller__wrapper");
          const btns = item.querySelectorAll(".spoller__quastionare");

          w.style.maxHeight = null;
          btns.forEach(b => b.classList.remove("active"));
        });

        if (!isOpen) {
          wrapper.style.maxHeight = wrapper.scrollHeight + "px";
          buttons.forEach(b => b.classList.add("active"));
        }
      });
    });
  });
});
