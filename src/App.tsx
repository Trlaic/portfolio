import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ClassicPage from "./pages/ClassicPage/ClassicPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/resume" element={<ClassicPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
