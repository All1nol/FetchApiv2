const getRandomPokemonId = () => {
    return Math.floor(Math.random() * 898) + 1;
  };
  
  const fetchData = async () => {
    try {
      const randomPokemonId = getRandomPokemonId();
      const response = await fetch(`/api/pokemon/${randomPokemonId}`);
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
  
  