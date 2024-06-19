import Hiragana from './pages/hiragana';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import MyCards from './pages/myCards';


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <TopBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hiragana' element={<Hiragana />} />
          <Route path='/myCards' element={<MyCards />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
