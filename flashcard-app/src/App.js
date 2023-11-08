import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UploadPage } from './Pages/UploadPage.js';
import { TestPage } from './Pages/TestPage';

export const AppContext = createContext();

function App() {
  const [inputFile, setInputFile] = useState()

  return (
    <div className="App">
      <AppContext.Provider value={[inputFile, setInputFile]}>
      <Router>
        <Routes>
          <Route path='/' element={<UploadPage />} />
          <Route path='/test' element={<TestPage />}></Route>
        </Routes>
      </Router>
      </AppContext.Provider>
      
      
    </div>
    
  );
}

export default App;
