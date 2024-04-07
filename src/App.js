import "./App.css";
import { Home } from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Questions } from "./Components/Questions/Questions";
import { Download } from "./Components/Download/Download";
import { Footer } from "./Components/Footer/Footer";
import { Top } from "./Components/Top/Top";
import { Page1 } from "./Components/Page1/Page1";
import { AppContext } from "./Components/Modals/Context";
import { Page2 } from "./Components/Page2/Page2";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContext>
          <Top />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Page1 />} />
            <Route path="/mybookings" element={<Page2 />} />
          </Routes>
          <Download />
          <Footer />
        </AppContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
