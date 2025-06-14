import { useState } from "react"
import './InitialScreen.css'

const InitialScreen = ({GameStart}) => {
    const [numberAlert, setAlert] = useState(false)

    

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
        <h1>Informe a quantidade de algarismos:</h1>

        <form onSubmit={handlerSubmit} className="mainForm">
            <input type="number" name="number"/>
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