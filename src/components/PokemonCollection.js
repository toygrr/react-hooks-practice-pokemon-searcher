import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ searchResults }) {
  const cardArray = searchResults.map((pokemon) => {
    return (
      <PokemonCard
        key={pokemon.name}
        image={pokemon.sprites}
        name={pokemon.name}
        hp={pokemon.hp}
      />
    );
  });

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {cardArray}
    </Card.Group>
  );
}

export default PokemonCollection;
