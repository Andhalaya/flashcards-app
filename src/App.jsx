import Hiragana from './pages/hiragana';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <TopBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hiragana' element={<Hiragana />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
