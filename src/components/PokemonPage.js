import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeData, setPokeData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((data) => dataHandler(data));
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  }
  function dataHandler(data) {
    setPokeData(data);
  }

  const searchResults = pokeData.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase()); // include returns a boolean
  });
  // needs to call on pokeData to update state using a spread
  // form needs to pass callback to add newPokemon to our spread array
  function handleSubmit(newPokemon) {
    setPokeData([...pokeData, newPokemon]);
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={handleSubmit} />
      <br />
      <Search search={search} handleSearch={handleSearch} />
      <br />
      <PokemonCollection searchResults={searchResults} />
    </Container>
  );
}

export default PokemonPage;
