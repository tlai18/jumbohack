import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Path to your i18n.js file

import Contact from './pages/Contact';
import Temp from './pages/Temp';


function App() {
  return (

    <I18nextProvider i18n={i18n}>
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
              path="/temp"
              element={<Temp/>}
            />
            <Route 
              path="/contact"
              element={<Contact/>}
            />
          </Routes>

        </div>
      </BrowserRouter>
     
    </div> 
    </I18nextProvider>

  );
}

export default App;
