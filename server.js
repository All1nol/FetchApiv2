const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/api/pokemon', async (req, res) => {
  try {
    const randomPokemonId = Math.floor(Math.random() * 10) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
