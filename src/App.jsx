import {
  LobbyPage,
  TurnPage,
  QuestionPage,
  TriviaPage,
  DuelPage,
  AliancePage,
  EveryonePage
} from './pages'

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={<LobbyPage />} />
          <Route path='/turn'
            element={<TurnPage />} />
          <Route path='/question-type'
            element={<QuestionPage />} />
          <Route path='/trivia'
            element={<TriviaPage />} />
          <Route path='/duel'
            element={<DuelPage />} />
          <Route path='/aliance'
            element={<AliancePage />} />
          <Route path='/everyone'
            element={<EveryonePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
