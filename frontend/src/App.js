import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login';
import Signup from './pages/Signup';
import History from './pages/History';
import Temp from './pages/Temp';


function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          
          <Routes>
            <Route 
              path="/"
              element={<Home/>}
            />
            <Route 
              path="/login"
              element={<Login/>}
            />
            <Route 
              path="/signup"
              element={<Signup/>}
            />
            <Route 
              path="/temp"
              element={<Temp/>}
            />
            <Route 
              path="/history"
              element={<History/>}
            />
          </Routes>

        </div>
      </BrowserRouter>
     
    </div> 
  );
}

export default App;
