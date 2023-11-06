import { FileUpload } from "../Components/FileUpload"

export const UploadPage = () => {
    return (
        <div>
            <h1>Flashcard App</h1>
            <p>Upload your CSV file here</p>
          
            <FileUpload />
        </div>
    )
}