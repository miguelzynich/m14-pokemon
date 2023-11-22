import React from 'react';

const PokemonDisplay = ({ name, image, evolution, onEdit, onDelete }) => {
  return (
    <div className="pokemon-display">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h3>Estágio de evolução: {evolution}</h3>
      <button onClick={onEdit}>Alterar</button>
      <button onClick={onDelete}>Remover</button>
    </div>
  );
};

export default PokemonDisplay;
