import "./App.css";
import { Home } from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Questions } from "./Components/Questions/Questions";
import { Download } from "./Components/Download/Download";
import { Footer } from "./Components/Footer/Footer";
import { Top } from "./Components/Top/Top";
import { Page1 } from "./Components/Page1/Page1";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Top />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Page1 />} />
        </Routes>
        <Questions />
        <Download />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
