import "./App.css";
import { Home } from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Questions } from "./Components/Questions/Questions";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Questions />
      </BrowserRouter>
    </div>
  );
}

export default App;
