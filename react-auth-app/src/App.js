import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Table from "./components/Table";
import "./style.css";

function App() {
  return (
    <div className="bg-gray-100 h-screen m-auto flex justify-center pt-10 ">
      <div>
        <Routes>
          {/* <Route path="/" element={<Demo/>} /> */}
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="table" element={<Table/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
