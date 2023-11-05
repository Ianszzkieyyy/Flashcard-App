import './App.css';
import { useState, createContext } from 'react';
import { FileUpload } from './Components/FileUpload';

export const AppContext = createContext();

function App() {
  const [inputFile, setInputFile] = useState(null)

  return (
    <div className="App">
      <h1>Flashcard App</h1>
      <p>Upload your CSV file here</p>
      <AppContext.Provider value={setInputFile}>
        <FileUpload />
      </AppContext.Provider>
      {inputFile?.map((item, index) => (
        <div key={index}>
          <div>Question: {item.Question}</div>
          <div>Answer: {item.Answer}</div>
        </div>
      ))}
    </div>
    
  );
}

export default App;
