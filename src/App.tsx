import {  Routes, Route } from "react-router";
import { HomeDashboard } from "./site/HomeDashboard";

function App() {
  

  return (
        <Routes>
      <Route path="/" element={<HomeDashboard />} />
    </Routes>
  )
}

export default App
