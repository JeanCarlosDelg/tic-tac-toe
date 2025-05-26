import { Square } from "./component/Square"
import { WinnerModal } from "./component/WinnerModal";
import { TURNS } from "./constants"
import { logic } from "./logic/board"

// const board = Array(9).fill(null)

function App() {

  const { resetGame, updateBoard, turn, board, winner } = logic();

  return (
    <main className="board">
      <h1>Tic-Tac-Toe</h1>
      <button onClick={resetGame} className="reset">Reset</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {/* {index} */}
                {square}
              </Square>
            )
          })
        }
      </section>


      <section className="turn">
        <Square
          // className={className}
          isSelected={turn === TURNS.X}
        >
          {TURNS.X}
        </Square>
        <Square
          // className={className}
          isSelected={turn === TURNS.O}
        >
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal 
        resetGameFrom={resetGame}
        winnerFrom={winner}
      />
    </main>
  )
}

export default App
