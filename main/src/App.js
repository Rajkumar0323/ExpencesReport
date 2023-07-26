import "./App.css";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import ContactBook from "./components/ContactBook";
import EditUser from "./components/EditUser";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Conditional from "./components/Conditional";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [name, setname] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Conditional />}>
          <Route path="/homepage" element={<ContactBook name={name} />} />
          <Route path="/all" element={<AllUsers />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Route>
        <Route path="/" element={<Login setname={setname} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
