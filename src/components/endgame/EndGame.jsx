import './EndGame.css'

const EndGame = ({newGame, guessedNumber, attempts}) => {
    return (
        <div className="endGameContainer">
            <h1>Parabéns! Você descobriu o número secreto!</h1>
            <p>Numero: {guessedNumber}</p>
            <p>Tentativas: {attempts}</p>
            
            <button onClick={newGame}>Novo jogo</button>
        </div>
    )
}

export default EndGame