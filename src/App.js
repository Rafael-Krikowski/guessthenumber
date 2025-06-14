import './App.css';
import InitialScreen from './components/initialscreen/InitialScreen';
import Game from './components/gamescreen/Game';
import EndGame from './components/endgame/EndGame';
import { useState } from 'react';

function App() {
  const [stage, setStage] = useState('initial')
  const [algarismQuantity, setAlgQuantity] = useState(3)

  const GameStart = (algQty) => {
    setAlgQuantity(algQty)
    setStage('game')
  }

  const endGame = () => {
    setStage('endGame')
  }

  const newGame = () => {
    setStage('initial')
  }

  

  return (
    <div className="App">
      {stage === 'initial' && <InitialScreen GameStart={GameStart}/>}

      {stage === 'game' && <Game 
        endGame={endGame} 
        algarismQuantity={algarismQuantity}
        newGame={newGame} />}

      {stage === 'endGame' && <EndGame newGame={newGame}/>}
      
    </div>
  );
}

export default App;
