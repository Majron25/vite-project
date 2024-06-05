import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import HomePage from "./pages/HomePage";
import Message from "./pages/Message";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Message" element={<Message />} />
            {/* Define other routes that you need */}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
