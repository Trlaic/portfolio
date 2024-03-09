import { BrowserRouter, Route, Routes } from "react-router-dom"
import React, { Suspense } from "react"
import LoadingPage from "./pages/LoadingPage"
import ColorsProvider from "./context/ColorsProvider"

const HomePage = React.lazy(() => import('./pages/HomePage'))
const ClassicPage = React.lazy(() => import('./pages/ClassicPage/ClassicPage'))
const AnimatedPage = React.lazy(() => import('./pages/AnimatedPage/AnimatedPage'))

const App = () => {
  return (
    <BrowserRouter>
      <ColorsProvider>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/resume" element={<ClassicPage />}/>
            <Route path="/resume-animated" element={<AnimatedPage />}/>
          </Routes>
        </Suspense>
      </ColorsProvider>
    </BrowserRouter>
  )
}

export default App
