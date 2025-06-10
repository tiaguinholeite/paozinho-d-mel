import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllPokemons from './pages/Poke/AllPokemons';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<AllPokemons />} />
    </Routes>
  );
}

export default App;
