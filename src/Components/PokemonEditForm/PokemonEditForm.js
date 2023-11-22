import React, { useState } from 'react';
import './PokemonEditForm.css'; 

const PokemonEditForm = ({
  name,
  image,
  evolution,
  onCancel,
  onSave,
}) => {
  const [nameInput, setNameInput] = useState(name ?? '');
  const [imageUrlInput, setImageUrlInput] = useState(image ?? '');
  const [evolutionInput, setEvolutionInput] = useState(
    evolution?.toString() ?? ''
  );

  const handleChangePokemon = () => {
    onSave({
      name: nameInput,
      imageUrl: imageUrlInput,
      evolution: Number(evolutionInput),
    });
  };

  return (
    <div className="pokemon-edit-form">
      <label>
        Nome:
        <input
          type="text"
          className="form-input" 
          onChange={(e) => setNameInput(e.target.value)}
          value={nameInput}
        />
      </label>
      <label>
        Url da imagem:
        <input
          type="text"
          className="form-input" 
          onChange={(e) => setImageUrlInput(e.target.value)}
          value={imageUrlInput}
        />
      </label>
      <label>
        Estágio de evolução:
        <input
          type="number"
          className="form-input" 
          onChange={(e) => setEvolutionInput(e.target.value)}
          value={evolutionInput}
        />
      </label>
      <button onClick={onCancel}>Cancela</button>
      <button onClick={handleChangePokemon}>Confirma</button>
    </div>
  );
};

export default PokemonEditForm;
