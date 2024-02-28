import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, { Suspense } from "react"
import LoadingPage from "./pages/LoadingPage"

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ClassicPage = React.lazy(() => import('./pages/ClassicPage/ClassicPage'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/resume" element={<ClassicPage />}/>
        </Routes>
      </Suspense>
      </BrowserRouter>
  )
}

export default App
