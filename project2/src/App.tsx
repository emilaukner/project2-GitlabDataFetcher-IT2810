import Home from "./pages/Home";
import CommitsPage from "./pages/CommitsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import IssuePage from "./pages/IssuePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

function App() {

  return (
    <div className="App">
      <Navigationbar/>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/commits" element={<CommitsPage />} />
            <Route path="/issues" element={<IssuePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
