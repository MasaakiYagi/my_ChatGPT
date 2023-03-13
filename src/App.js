import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chat from "./features/chat/Chat";
import Sidebar from "./features/sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="wrapper">
        <div className={`sidebar-container ${isSidebarOpen ? "open" : ""}`}>
          <Sidebar></Sidebar>
        </div>
        <div className="contents-container">
          <Routes>
            <Route path="/" element={<Chat></Chat>}></Route>
          </Routes>
        </div>
        <button
          className={`hamburger-menu ${isSidebarOpen ? "open" : ""}`}
          onClick={handleHamburgerClick}
        >
          <span className={`bar ${isSidebarOpen ? "open" : ""}`}></span>
          <span className={`bar ${isSidebarOpen ? "open" : ""}`}></span>
          <span className={`bar ${isSidebarOpen ? "open" : ""}`}></span>
        </button>
        <div className={`overlay ${isSidebarOpen ? "open" : ""}`}></div>
      </div>
    </Router>
  );
}

export default App;
