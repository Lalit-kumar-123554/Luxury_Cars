// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import CarDetails from "./Components/CarDetails.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car/:id" element={<CarDetails />} />
    </Routes>
  );
}

export default App;
