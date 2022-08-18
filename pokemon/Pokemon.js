const links =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
//1.attach all pics  2. attach numbers 3. style
for (let i = 1; i <= 151; i++) {
  const container = document.querySelector(".container");
  const div = document.createElement("div");
  div.classList.add("pokemon");
  const img = document.createElement("img");
  const label = document.createElement("span");
  label.textContent = `#${i}`;
  img.src = `${links}${i}.png`;
  container.appendChild(div);
  div.appendChild(img);
  div.appendChild(label);
}
