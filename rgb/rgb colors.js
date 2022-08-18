const h1 = document.querySelector("h1");
const button = document.querySelector("button");

// //${color}

button.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  document.body.style.backgroundColor = `rgb(${r},${g}, ${b})`;
  h1.innerText = `rgb(${r},${g}, ${b})`;
});
