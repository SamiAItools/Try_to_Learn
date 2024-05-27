import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  const [jokesFetched, setJokesFetched] = useState(false)
  useEffect(() => {
    axios
      .get('/api/jokes')
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const getJokes = () => {
    setJokesFetched(true);
  };

  return (
   <>
    <div className="container">
        <h1 className="title">Jokes</h1>
        <p className="joke-count">Number of Jokes: {jokes.length}</p>
        <button className="get-jokes-btn" onClick={getJokes}>Get Jokes</button>
        <ul className="joke-list">
          {jokesFetched &&
            jokes.map((joke) => (
              <li key={joke.id} className="joke-item">
                <h3 className="joke-title">{joke.name}</h3>
                <p className="joke-content">{joke.content}</p>
              </li>
            ))}
        </ul>
      </div>
   </>
  )
}

export default App
