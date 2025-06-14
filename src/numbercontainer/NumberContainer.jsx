import { useEffect, useRef, useState } from 'react'
import './NumberContainer.css'

const NumberContainer = ({numbers, getUserNumbers}) => {
    const inputsRef = useRef([])
    //const [userNumbers, setUserNumbers] = useState([])

    const getNumbers = () => {
        let values = []
        values = inputsRef.current.map(input => (parseInt(input.value)))
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
                    <input type="number" key={i} ref={(el) => (inputsRef.current[i] = el)}/>
                ))}
            </div>

            <div className='mainTipContainer'>
                <div className='btnContainer'>
                    <button onClick={getNumbers}>OK</button>
                </div>
                
                <div className='tips'>
                    <span>Números certos: 2 </span>
                    <span>Lugares certos: 1 </span>
                </div>
            </div>

        </div>
        
    )
}

export default NumberContainer