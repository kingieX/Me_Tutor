import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import MeTutor from "./MeTutor";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MeTutor />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
    )
}

export default App;