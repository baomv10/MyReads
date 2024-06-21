import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
