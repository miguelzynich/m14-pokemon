import React, { useState } from 'react';
import PokemonEditForm from './Components/PokemonEditForm/PokemonEditForm';

const IndexPage = () => {
  const [createPokemon, setCreatePokemon] = useState(false);
  const [updateList, setUpdateList] = useState(0);

  const handleAddPokemon = () => {
    setCreatePokemon(true);
  };

  return (
    <main>
      <h1>Lista de Pokémon</h1>

      <div className="pokemon-container">
        {}
        {}
      </div>

      <div className="create-card">
        {createPokemon && (
          <PokemonEditForm
            onCancel={() => setCreatePokemon(false)}
            onSave={(data) => {
              console.log('Novo Pokémon:', data);
              setUpdateList(updateList + 1);
              setCreatePokemon(false);
            }}
          />
        )}

        <button className="button-add" onClick={handleAddPokemon}>
          Adicionar Pokémon
        </button>
      </div>
    </main>
  );
};

export default IndexPage;
