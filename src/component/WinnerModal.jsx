import { Square } from "./Square"

export function WinnerModal ({ resetGameFrom, winnerFrom }) {

  if (winnerFrom === null)  return null

  const winnerText = winnerFrom === false ? 'Empate' : 'Ganó:'

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">
          {winnerFrom && <Square>{winnerFrom}</Square>}
        </header>

        <footer>
          <button onClick={resetGameFrom}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}