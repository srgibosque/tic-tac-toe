import './App.css'
import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer((currentActivePlayer) => {
      currentActivePlayer === 'X' ? 'O' : 'X'
    });
  }
  
  return (
    <main>
      <div>
        <ol>
         <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
         <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare}/>
      </div>
    </main>
  );
}

export default App
