import { useFavorites } from '../context/FavoritesContext';

export default function FavoriteSidebar() {
  const { favorites } = useFavorites();

  return (
    <div className="fixed bottom-4 right-4 w-60 max-h-96 overflow-y-auto bg-gray-800 text-white shadow-xl rounded-lg border border-purple-600 p-3 z-50">
      <h2 className="text-lg font-bold text-purple-300 mb-2 text-center">Favoritos ⭐</h2>
      {favorites.length === 0 ? (
        <p className="text-sm text-gray-400 text-center">Nenhum Pokémon</p>
      ) : (
        <ul className="space-y-2">
          {favorites.map((pokemon) => (
            <li key={pokemon.id} className="flex items-center gap-2">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-8 h-8" />
              <span className="capitalize text-sm">{pokemon.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
