import Header from "@components/Header";
import NavBar from "@components/NavBar";
import Guitares from "@pages/Guitares";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/guitares" element={<Guitares />} />
      </Routes>
    </div>
  );
}

export default App;
