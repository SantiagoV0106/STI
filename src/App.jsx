import {
  LobbyPage,
  TurnPage,
  QuestionPage,
  TriviaPage,
  DuelPage,
  EveryonePage
} from './pages'

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import { AlliancePage } from './pages/AlliancePage/AlliancePage'


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
          <Route path='/alliance'
            element={<AlliancePage />} />
          <Route path='/everyone'
            element={<EveryonePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
