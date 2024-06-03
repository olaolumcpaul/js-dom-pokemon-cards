console.log(data);

const cardsList = document.querySelector("ul.cards");

for (let i = 0; i < data.length; i++) {
  const pokemon = data[i];

  const card = document.createElement("li");
  card.classList.add("card");

  const pokemonName = document.createElement("h2");
  pokemonName.classList.add("card--text");
  pokemonName.textContent = pokemon.name;
  pokemonName.style.textTransform = "capitalize";
  card.appendChild(pokemonName);

  const pokemonImage = document.createElement("img");
  pokemonImage.src = pokemon.sprites.other["official-artwork"].front_default;
  pokemonImage.width = 256;
  card.appendChild(pokemonImage);

  const pokemonStats = document.createElement("ul");
  pokemonStats.classList.add("card--text");
  pokemonStats.textContent = "";
  for (let j = 0; j < pokemon.stats.length; j++) {
    const stat = pokemon.stats[j];
    const statItem = document.createElement("li");
    statItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
    pokemonStats.appendChild(statItem);
  }
  card.appendChild(pokemonStats);

  cardsList.appendChild(card);
}

// remove bullets from the card list
const list = document.querySelector(".cards");
list.style.listStyle = "none";

// center the image
const images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  images[i].style.display = "block";
  images[i].style.margin = "auto";
  images[i].backgroundColor = "lightgrey";
}
