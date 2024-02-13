const fetchData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const renderPokemonInfo = (pokemon) => {
    const rootElement = document.getElementById('root');
    const pokemonInfo = document.createElement('div');
    pokemonInfo.innerHTML = `
      <h1>${pokemon.name}</h1>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
    `;
    rootElement.appendChild(pokemonInfo);
  };
  
  const main = async () => {
    const pokemonData = await fetchData();
    renderPokemonInfo(pokemonData);
  };
  
  main();
  