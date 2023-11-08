import { useContext } from "react"
import { AppContext } from "../App"

export const TestPage = () => {
    const [inputFile, ] = useContext(AppContext)
    console.log(inputFile)
    return (
        <div>
            {inputFile && inputFile.map((set, index) => (
                <div key={index}>
                    <p>{set.Question}</p>
                    <p>{set.Answer}</p>
                </div>
            ))}
        </div>
    )
}