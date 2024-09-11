import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './index.css'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'

function App() {
 return (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/recipe/:id" element={<RecipeDetail />}></Route>
    </Routes>
  </Router>
 )
}

export default App
