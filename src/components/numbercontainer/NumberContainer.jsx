import { useEffect, useRef, useState } from 'react'
import './NumberContainer.css'

const NumberContainer = ({numbers, getUserNumbers, correctAlgarism, getGuessesList}) => {
    
    const inputsRef = useRef([])

    const getNumbers = () => {
        let values = []
        values = inputsRef.current.map(input => (parseInt(input.value)))

        if(values.length == 0) {
            return
        }

        const {position, existence} = correctAlgarism(numbers, values)

        const currentGuess = {
            guess: values.join(' '),
            position,
            existence
        }

        getGuessesList(currentGuess)
        getUserNumbers(values)
    }

    

    useEffect(
        () => {
            getNumbers()
        },
        [inputsRef]
    )

    

    return (
        <div className='mainNumberContainer'>
            <div className="numberContainer">
                {numbers.map((_, i) => (
                    <input type="number" max={9} min={0} key={i} ref={(el) => (inputsRef.current[i] = el)}/>
                ))}
            </div>

            <div className='btnContainer'>
                    <button onClick={getNumbers}>OK</button>
            </div>

        </div>
        
    )
}

export default NumberContainer