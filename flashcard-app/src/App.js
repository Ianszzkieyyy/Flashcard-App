import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UploadPage } from './Pages/UploadPage.js';

export const AppContext = createContext();

function App() {
  const [inputFile, setInputFile] = useState(null)

  return (
    <div className="App">
      <AppContext.Provider value={[inputFile, setInputFile]}>
      <Router>
        <Routes>
          <Route path='/' element={<UploadPage />} />
        </Routes>
      </Router>
      </AppContext.Provider>
      
      
    </div>
    
  );
}

export default App;
