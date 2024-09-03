import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SingleNote from "./pages/SingleNote";

function App() {
  return (
    <div className="max-w-7xl m-auto mt-2 sm:mt-5 px-5">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<SingleNote />} />
      </Routes>
    </div>
  );
}

export default App;
