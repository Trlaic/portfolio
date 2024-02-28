import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, { Suspense } from "react"
import LoadingPage from "./pages/LoadingPage"
import AnimatedPage from "./pages/AnimatedPage/AnimatedPage";

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ClassicPage = React.lazy(() => import('./pages/ClassicPage/ClassicPage'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/resume" element={<ClassicPage />}/>
          <Route path="resume-animated" element={<AnimatedPage />}/>
        </Routes>
      </Suspense>
      </BrowserRouter>
  )
}

export default App
