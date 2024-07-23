import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
