import './App.css'
import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {


  return (
    <main>
      <div>
        <ol>
         <Player name="Player 1" symbol="X" />
         <Player name="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App
