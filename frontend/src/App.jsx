import Header from "@components/Header";
import NavBar from "@components/NavBar";
import AdminGuitares from "@pages/AdminGuitares";
import Guitares from "@pages/Guitares";
import Pianos from "@pages/Pianos";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/guitares" element={<Guitares />} />
        <Route path="/adminguitares" element={<AdminGuitares />} />
        <Route path="/pianos" element={<Pianos />} />
      </Routes>
    </div>
  );
}

export default App;
