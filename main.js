const card = document.querySelector(".card");
card.addEventListener("mousemove", (e) => {
  card.style.cssText = `
      transform: rotateX(${
        -(window.innerHeight / 2 - e.pageX) / 25
      }deg) rotateY(${(window.innerHeight / 2 - e.pageY) / 25}deg);
  `;
});

card.addEventListener("mouseout", (e) => {
  card.style.cssText = `
  transition: all .3s;
      transform: rotate(${0}deg, ${0}deg);
  `;
});
