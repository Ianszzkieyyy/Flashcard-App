import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AppContext } from '../App';
import Papa from 'papaparse';

export const FileUpload = () => {
    const { register, handleSubmit } = useForm();
    const setInputFile = useContext(AppContext)

    const onSubmit = async (data) => {
        const selectedFile = data.inputCSV[0];

        if (selectedFile) {
            try {
                const parsedData = await parseCSVFile(selectedFile);
                setInputFile(parsedData)
            } catch (error) {
                console.error("Error parsing CSV file:", error);
            }
        }
    }

    const parseCSVFile = (file) => {
        return new Promise((resolve, reject) => {
            Papa.parse(file, {
                complete: (result) => {
                    resolve(result.data);
                },
                header: true,
            })
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("inputCSV")} type='file' accept='.csv' />
            <button>Submit</button>
        </form>
    )
}