import { useState } from "react"
import './InitialScreen.css'

const InitialScreen = ({GameStart}) => {
    const [numberAlert, setAlert] = useState(false)
    const [digitNumber, setDigitNumber] = useState(3)

    

    const handlerSubmit = (e) => {
        e.preventDefault()

        if(e.target.number.value > 10){
            setAlert(true)
            return
        }
        GameStart(e.target.number.value)
    }

    return (
        <>
        <h1>Adivinhe o número!! </h1>

        <p>Informe abaixo a quantidade de dígitos que o número secreto deve possuir.</p>

        <form onSubmit={handlerSubmit} className="mainForm">
            <input type="number" name="number" min={1} max={10} 
                onChange={(e) => {setDigitNumber(e.target.value)}}
                value={digitNumber}/>
            <button type="submit"> Começar </button>
        </form>

        {
            numberAlert ? (
                <div>Insira um valor menor que 10</div>
            ) : (
                <span></span>
            )
        }
        </>
    )
}

export default InitialScreen