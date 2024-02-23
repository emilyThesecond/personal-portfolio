import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"


const App = () => {
  return (
    <div>
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
