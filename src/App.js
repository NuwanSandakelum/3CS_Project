import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Views/Home";
import Profile from "./Views/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
