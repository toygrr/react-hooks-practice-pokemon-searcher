import React, { useState } from "react"
import { Form } from "semantic-ui-react"

function PokemonForm({ handleSubmit }) {
  //state containing a "template" for new object.  this controls state before we send it up to handleSubmit
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  })

  // new object to recreate nested data structure to refactor above "template", this takes the saved state data and refactors it for our post
  const pokemonToAdd = {
    name: newPokemon.name,
    hp: newPokemon.hp,
    sprites: {
      front: newPokemon.frontUrl,
      back: newPokemon.backUrl,
    },
  }

  // for each name/value create new object [...newPokemon] - set the object in state to that value
  function handleChange(e) {
    // name of each form input
    const name = e.target.name
    // what we're typing
    const value = e.target.value
    setNewPokemon({ ...newPokemon, [name]: value })
  }

  // passing new pokemon object to our new pokeData array
  function handleSubmitHandler(e) {
    e.preventDefault()
    handleSubmit(pokemonToAdd)

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemonToAdd),
    })
      .then((r) => r.json())
      .then((data) => console.log(data))
  }
  // tying values to keys (value={newPokemon.name})
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmitHandler} onChange={handleChange}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            value={newPokemon.name}
            placeholder="Name"
            name="name"
          />
          <Form.Input
            fluid
            label="hp"
            value={newPokemon.hp}
            placeholder="hp"
            name="hp"
          />
          <Form.Input
            fluid
            label="Front Image URL"
            value={newPokemon.frontUrl}
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            value={newPokemon.backUrl}
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default PokemonForm
