import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { ThemeProvider} from './context/ThemeContext.jsx';

import './App.css';
import Home from './pages/Home.jsx';
import Hiragana from './pages/hiragana.jsx'
import TopBar from './components/TopBar/TopBar.jsx';
import MyCards from './pages/myCards';
import LoginPage from './pages/Login/index.jsx';



export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
       <AppContent />
      </AuthProvider>
    </ThemeProvider>
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
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}