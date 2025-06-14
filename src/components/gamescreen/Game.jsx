import { useCallback, useEffect, useState } from "react"
import NumberContainer from "../numbercontainer/NumberContainer"
import TableGuesses from "../tableGuesses/TableGuesses"
import './Game.css'

const Game = ({endGame, algarismQuantity, newGame, getNumber, getAttempts}) => {
    const [numbers, setNumber] = useState([])
    const [userNumbers, setUserNumbers] = useState([])
    const [guesses, setGuesses] = useState([])
    const [rightPosition, setRightPosition] = useState(0)
    const [rightAlgarism, setRightAlgarism] = useState(0)

    const createNumber =  () => {
        let newNumber = []

        for(let i = 0; i < algarismQuantity; i++){
            let n = Math.floor(Math.random() * 9)
            newNumber.push(n)
        }

        setNumber(newNumber) 
        getNumber(newNumber.join(''))
    }

    const getUserNumbers = (n) => {
        setUserNumbers(n)

        if(numbers.length !== n.length){
            return
        }

        let test = comparingNumbers(numbers, n)
        
        if(test){
            getAttempts(guesses.length)
            endGame()
            return
        }

    }

    const comparingNumbers = (a, b) => {
    

        if(a.length !== b.length || a.length == 0){
            return false
        }

        return a.every((valor, i) => valor === b[i])
    }

    const correctAlgarism = (a, b) => {
        let aCopy = [...a]
        let bCopy = [...b]
        let position = 0
        let existence = 0


        for(let i = 0; i < aCopy.length; i++){
            if(aCopy[i] == bCopy[i]){
                position++
                existence++
                aCopy[i] = null
                bCopy[i] = null
            }
        }

        for(let i = 0; i < a.length; i++){
            if(aCopy[i] !== null){
                let index = bCopy.indexOf(aCopy[i])

                if(index !== -1){
                    existence++
                }

                bCopy[index] = null
            }
        }

        return {position, existence}

    }

    const getGuessesList = (g) => {
        setGuesses((current) => [...current, g])
    }

    useEffect(() => {
        createNumber()
    }, [algarismQuantity])


    return (
        <div className="mainGameContainer">
            <div className="btnEncerrarContainer">
                <button onClick={newGame} className="btnEncerrar">Encerrar</button>
                <button onClick={newGame} className="btnEncerrar">Revelar</button>
            </div>

            <div>
                <NumberContainer 
                    numbers={numbers}
                    getUserNumbers={getUserNumbers}
                    comparingNumbers={comparingNumbers}
                    correctAlgarism={correctAlgarism}
                    getGuessesList={getGuessesList}
                    />
            </div>

            <div>
                <TableGuesses guesses={guesses} />
            </div>
        </div>
    )
}

export default Game