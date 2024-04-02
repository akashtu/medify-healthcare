import "./App.css";
import { Home } from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Questions } from "./Components/Questions/Questions";
import { Download } from "./Components/Download/Download";
import { Footer } from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Questions />
        <Download />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
