const PokemonCard = ({
  id,
  name,
  image,
  evolution,
  createPokemon,
  setCreatePokemon,
  updateList,
  setUpdateList,
}) => {
  const [editPokemon, setEditPokemon] = useState(createPokemon ?? false);
  const [showNewPokemonCard, setShowNewPokemonCard] = useState(false);

  const handleAddPokemon = async () => {
    try {
      const response = await axios.post('http://localhost:4000/new-pokemon', {
        name: 'Novo Pokémon',
        imageUrl: 'URL_DA_IMAGEM',
        evolution: 1,
      });

      if (response.status === 201) {
        setCreatePokemon(false);
        setUpdateList(updateList + 1);
        setShowNewPokemonCard(true);
      } else {
        console.error('Erro ao adicionar Pokémon:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao adicionar Pokémon:', error.message);
    }
  };

  const handleSave = (data) => {
    // ... (sua lógica de salvar)
  };

  const handleDeletePokemon = () => {
    // ... (sua lógica de deletar)
  };

  return (
    <div className="pokemon-card">
      {editPokemon ? (
        <PokemonEditForm
          name={name}
          image={image}
          evolution={evolution}
          onCancel={() =>
            createPokemon ? setCreatePokemon(false) : setEditPokemon(false)
          }
          onSave={handleSave}
        />
      ) : (
        <>
          <PokemonDisplay
            name={name}
            image={image}
            evolution={evolution}
            onEdit={() => setEditPokemon(true)}
            onDelete={handleDeletePokemon}
          />
          {showNewPokemonCard && (
            <PokemonDisplay
              name="Novo Pokémon"
              image="URL_DA_IMAGEM"
              evolution={1}
              onEdit={() => setShowNewPokemonCard(false)}
              onDelete={() => setShowNewPokemonCard(false)}
            />
          )}
          <button onClick={handleAddPokemon}>Adicionar Pokémon</button>

      )}
    </div>
  );
};

export default PokemonCard;
