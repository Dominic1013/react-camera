import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";

import CameraPage from "./pages/CameraPage";
import Header from "./pages/components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/camera" element={<CameraPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
