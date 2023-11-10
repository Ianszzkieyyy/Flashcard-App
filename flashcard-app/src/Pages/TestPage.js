import { useState, useContext, useEffect } from "react"
import { AppContext } from "../App"

export const TestPage = () => {

    const [inputFile, ] = useContext(AppContext)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [hasClicked, setHasClicked] = useState(false)
    const [isDone, setIsDone] = useState(false)
    

    useEffect(() => {
        setCurrentIndex(Math.floor(Math.random()*inputFile.length))
        setIsDone(false)
    }, [inputFile.length])

    const handleFlipCard = () => {
        setIsDone(true);
      };

    const handleNextCard = () => {
        setCurrentIndex((prevIndex) => {
            let newIndex = Math.floor(Math.random() * inputFile.length);
            while (newIndex === prevIndex) {
                newIndex = Math.floor(Math.random() * inputFile.length);
            }
            setIsDone(false)
            setHasClicked(false)
            return newIndex
        })
    }

    const handleScore = () => {
        setScore(score + 1)
        setHasClicked(true);
    }
      

    return (
        <div>
            {isDone ? (
                <div>
                    <h1>{inputFile[currentIndex].Answer}</h1>
                    {!hasClicked ? <button onClick={handleScore}>Mark as Correct</button> : <p>Marked Correct!</p>}
                    <button onClick={handleNextCard}>Next</button>
                </div>
            ) : (
                <div>
                    <p>{inputFile[currentIndex].Question}</p>
                    <button onClick={handleFlipCard}>Flip Card</button>
                </div>
            )}
        </div>
    )
}