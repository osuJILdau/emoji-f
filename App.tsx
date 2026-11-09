import { useState } from 'react'

const emojis = [
  {
    id: 1,
    symbol: '💯',
    name: '100',
    description: 'Hundred, points, symbol, wow, win, perfect, parties',
  },
  {
    id: 2,
    symbol: '🔢',
    name: '1234',
    description: 'input symbol for numbers symbol',
  },
  {
    id: 3,
    symbol: '🔢',
    name: '1234',
    description: 'input symbol for numbers symbol',
  },
]

function App() {
  const [search, setSearch] = useState('')

  const filteredEmojis = emojis.filter((emoji) => {
    const text = (emoji.name + ' ' + emoji.description).toLowerCase()
    return text.includes(search.toLowerCase().trim())
  })

  return (
    <div className="page">
      <header className="hero">
        <h1>Emoji Finder</h1>
        <p>Find emoji by keywords</p>

        <input
          className="search"
          type="search"
          placeholder="Placeholder"
          aria-label="Find emoji by keywords"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </header>

      <main className="content">
        <div className="emoji-grid">
          {filteredEmojis.map((emoji) => (
            <article className="emoji-card" key={emoji.id}>
              <div className="emoji-symbol">{emoji.symbol}</div>
              <h2>{emoji.name}</h2>
              <p>{emoji.description}</p>
            </article>
          ))}
        </div>

        {filteredEmojis.length === 0 && (
          <p className="empty-message">Nothing found</p>
        )}
      </main>
    </div>
  )
}

export default App
