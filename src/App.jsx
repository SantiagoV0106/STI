import { useEffect, useState } from 'react'
import { Button } from './components'

function App() {

  const [categories, setCategories] = useState(' ')
  const [difficulty, setDifficulty] = useState(' ')
  const [isdesabled, setDisabled] = useState(true)
  const [question, setQuestion] = useState([])


  const BASE_URL = 'https://the-trivia-api.com/api/questions?'

  const fetchData = async (BASE_URL, categories, difficulty) => {
    const res = await fetch(`${BASE_URL}categories=${categories}&limit=1&difficulty=${difficulty}`)

    try {
      if (res.ok) {
        const data = await res.json()
        console.log(data);
      }

    }
    catch (error) {
      console.error(error);
    }

  }

  const handleClick = () => {
    fetchData(BASE_URL, categories, difficulty)

  }

  const handleRadioChange = ({ target }) => {
    setCategories(target.value)

  }

  const handleDiffChange = ({ target }) => {
    setDifficulty(target.value)
  }


  useEffect(() => {
    console.log(` ${categories} : selected`);
    console.log(` ${difficulty} : selected`);
    setDisabled(categories && difficulty != ' ' ? false : isdesabled)
  }, [categories, difficulty, isdesabled])

  const hasQuestion = question.length > 0

  return (
    <>
      <h1>
        Trivia Api Test
      </h1>

      <div className="categories">
        <h2>Select a category</h2>

        <input
          type="radio"
          name="category"
          id="music"
          checked={categories === 'music'}
          value='music'
          onChange={handleRadioChange}
        />
        <label htmlFor="music"> Music</label>

        <input
          type="radio"
          name="category"
          id="history"
          checked={categories === 'history'}
          value='history'
          onChange={handleRadioChange}
        />
        <label htmlFor="history"> History</label>

        <input
          type="radio"
          name="category"
          id="geography"
          checked={categories === 'geography'}
          value='geography'
          onChange={handleRadioChange}
        />
        <label htmlFor="geography"> Geography</label>

        <h2>Select the difficulty</h2>

        <input
          type="radio"
          name="difficulty"
          id="easy"
          checked={difficulty === 'easy'}
          value='easy'
          onChange={handleDiffChange}
        />
        <label htmlFor="easy"> Easy</label>

        <input
          type="radio"
          name="difficulty"
          id="medium"
          checked={difficulty === 'medium'}
          value='medium'
          onChange={handleDiffChange}
        />
        <label htmlFor="medium"> Medium</label>

        <input
          type="radio"
          name="difficulty"
          id="hard"
          checked={difficulty === 'hard'}
          value='hard'
          onChange={handleDiffChange}
        />
        <label htmlFor="hard"> Hard</label>

      </div>
      <Button type='Button' label='Ask me something' click={handleClick} disabled={isdesabled} />
      {
        hasQuestion ? <h1>
          Hola
        </h1> : ''
      }
    </>
  )
}


export default App
