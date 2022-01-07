import "./App.css";
import Home from "./Components/Home";
import FullPost from "./Components/FullPost";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home />}></Route>
          <Route path="/:id" element={<FullPost />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
