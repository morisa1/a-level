const initNavigation = () => {
  const opener = document.querySelector(".nav-opener");
  const holder = document.querySelector(".nav__list");
  opener.addEventListener('click', (e) => {
    e.preventDefault();
    holder.classList.toggle('menu-open');
  });
};


document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
});
