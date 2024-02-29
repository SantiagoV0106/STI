import { LobbyPage } from './pages/LobbyPage/LobbyPage'
import { QuestionPage } from './pages/QuestionPage/QuestionPage'
import { TriviaPage } from './pages/TriviaPage/TriviaPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={<LobbyPage />} />
          <Route path='/question-type'
            element={<QuestionPage />} />
        </Routes>
        {/* <TriviaPage /> */}
      </BrowserRouter>
    </>
  )
}


export default App
