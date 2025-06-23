import { Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import AllPokemonsView from './views/AllPokemonsView';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/todos" element={<AllPokemonsView />} />
    </Routes>
  );
}
