import { Routes, Route } from "react-router-dom";
import DocketNote from "./components/DocketNote";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<DocketNote/>} />
    </Routes>
  )
}

export default App