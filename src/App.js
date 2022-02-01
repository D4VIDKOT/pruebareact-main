import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotPages from "./components/NotPages";
import ListAll from "./components/ListAll";
import CreateProduct from "./components/CreateProduct";
import Home from "./components/Home";
import Navbars from "./components/Navbars";
import ConsultItem from "./components/ConsultItem";

function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/ListAll" element={<ListAll/>} />
        <Route exact path="/create" element={<CreateProduct/>} />
        <Route exact path="/item" element={<ConsultItem/>} />
        <Route path="*" element={<NotPages/>} />
      </Routes>
    </Router>
  );
}

export default App;
