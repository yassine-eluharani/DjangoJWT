import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import { PrivateRoute } from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <PrivateRoute path="/" element={<HomePage />} />
          <PrivateRoute path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
