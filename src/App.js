import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import AdminPage from "./pages/Admin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
