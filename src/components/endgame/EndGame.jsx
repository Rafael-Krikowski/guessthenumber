const EndGame = ({newGame}) => {
    return (
        <div>
            <h1>Parabéns! Você descobriu o número secreto!</h1>
            <span>2345</span>
            <span>Tentativas: 15</span>
            
            <button onClick={newGame}>Novo jogo</button>
        </div>
    )
}

export default EndGame