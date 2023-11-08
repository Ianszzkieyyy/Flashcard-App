import { FileUpload } from "../Components/FileUpload"
import { useNavigate } from "react-router-dom"
import { useContext } from 'react';
import { AppContext } from '../App';

export const UploadPage = () => {
    const [inputFile, ] = useContext(AppContext)
    const navigate = useNavigate();



    return (
        <div>
            <h1>Flashcard App</h1>
            <p>Upload your CSV file here</p>
            <FileUpload />
            {inputFile && <button onClick={() => navigate("/test")}>Generate Test</button>}
        </div>
    )
}