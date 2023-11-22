import Navbar from "./Navbar";
import Game from "./pages/Game";
import Api from "./pages/Api";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </div>
    </>
  )
}

export default App;