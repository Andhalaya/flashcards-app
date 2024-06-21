import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';

import './App.css';
import Home from './pages/Home.jsx';
import Hiragana from './pages/Hiragana';
import TopBar from './components/TopBar';
import MyCards from './pages/MyCards';
import Form from './pages/LoginPage/Form.jsx';

export default function App(){
  return(
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

function AppContent() {
  return (
    <BrowserRouter>
      <div className='app'>
        <TopBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hiragana' element={<Hiragana />} />
          <Route path='/myCards' element={<MyCards />} />
          <Route path='/login' element={<Form />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}