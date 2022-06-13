import Header from "@components/Header";
import Guitares from "@pages/Guitares";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/guitares" element={<Guitares />} />
      </Routes>
    </div>
  );
}

export default App;
