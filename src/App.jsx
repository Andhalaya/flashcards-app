import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

import './App.css';
import Home from './pages/Home.jsx';
import Hiragana from './pages/hiragana.jsx';
import TopBar from './components/TopBar/TopBar.jsx';
import MyCards from './pages/myCards';
import LoginPage from './pages/Login/LoginPage.jsx';
import MyProfile from './pages/Myprofile.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function AppContent() {
  return (
    <div className='app'>
      <TopBar />
      <Routes>
        <Route path='//Myprofile' element={<MyProfile />} />
        <Route path='/' element={<Home />} />
        <Route path='/hiragana' element={<Hiragana />} />
        <Route path='/myCards' element={<MyCards />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}
