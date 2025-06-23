// src/components/FavoriteButton.jsx
import { useFavorites } from '../context/FavoritesContext';

export default function FavoriteButton({ pokemon }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const toggleFavorite = () => {
    isFavorite(pokemon.id) ? removeFavorite(pokemon.id) : addFavorite(pokemon);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`mt-2 px-3 py-1 rounded text-sm font-bold 
        ${isFavorite(pokemon.id) ? 'bg-purple-700 text-white' : 'bg-purple-300 text-black'}
        hover:opacity-90 transition`}
    >
      {isFavorite(pokemon.id) ? '★ Favorito' : '☆ Favoritar'}
    </button>
  );
}
