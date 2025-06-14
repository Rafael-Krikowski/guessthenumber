import { useCallback, useEffect, useState } from "react"
import NumberContainer from "../../numbercontainer/NumberContainer"
import './Game.css'

const Game = ({endGame, algarismQuantity, newGame}) => {
    const [numbers, setNumber] = useState([])
    const [userNumbers, setUserNumbers] = useState([])
    console.log(userNumbers)
    console.log(numbers)

    const createNumber =  () => {
        let newNumber = []

        for(let i = 0; i < algarismQuantity; i++){
            let n = Math.floor(Math.random() * 9)
            newNumber.push(n)
        }

        setNumber(newNumber) 
    }

    const getUserNumbers = (n) => {
        setUserNumbers(n)
    }

    const comparingNumbers = (a, b) => {
    

        if(a.length !== b.length || a.length == 0){
            return false
        }

        return a.every((valor, i) => valor === b[i])
    }

    useEffect(() => {
        createNumber()
    }, [algarismQuantity])

    useEffect(() => {
        let test = comparingNumbers(numbers, userNumbers)
        
        if(test){
            endGame()
        }
        
    }, [numbers, userNumbers, endGame])

    return (
        <div className="mainGameContainer">
            <div className="btnEncerrarContainer">
                <button onClick={newGame} className="btnEncerrar">Encerrar</button>
            </div>

            <div>
                <NumberContainer 
                    numbers={numbers}
                    getUserNumbers={getUserNumbers}
                    comparingNumbers={comparingNumbers}
                    />
            </div>
        </div>
    )
}

export default Game