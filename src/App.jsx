import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"


const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Main>
      <Footer></Footer>
    </div>
  )
}

export default App
