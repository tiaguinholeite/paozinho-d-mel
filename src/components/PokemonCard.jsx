// src/components/PokemonCard.jsx
import FavoriteButton from './FavoriteButton';

export default function PokemonCard({ pokemon }) {
  return (
    <div className="bg-gradient-to-br from-purple-700 to-purple-900 text-white rounded-xl shadow-lg p-4 m-2 w-full max-w-xs transform hover:scale-105 transition duration-300">
      <h2 className="text-2xl font-bold text-purple-200 mb-2 capitalize text-center">{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto mb-4 w-24 h-24"
      />
      <div className="text-sm text-gray-200 space-y-1 text-center">
        <p><span className="font-semibold text-purple-300">ID:</span> {pokemon.id}</p>
        <p><span className="font-semibold text-purple-300">Peso:</span> {pokemon.weight}</p>
        <p><span className="font-semibold text-purple-300">Altura:</span> {pokemon.height}</p>
      </div>
      <div className="flex justify-center mt-3">
        <FavoriteButton pokemon={pokemon} />
      </div>
    </div>
  );
}
