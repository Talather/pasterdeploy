// import { BrowserRouter, Routes , Route } from 'react-router-dom'
import "./App.css";
import { Navbar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./pages/Main";
import Auth from "./pages/auth/auth";
import Paste from "./pages/paste/paste";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
function App() {
  const location = useLocation();
  const excludePaths = ["/auth", "/login", "/register"]; // Add more if needed

  // Check if the current path matches any of the excluded paths
  const isAuthPage = excludePaths.includes(location.pathname);
  console.log("bhrgttyyy", isAuthPage);
  return (
    <>
      {!isAuthPage && <Navbar />}
      {!isAuthPage && <Sidebar />}

      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/paste" element={<Paste />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
