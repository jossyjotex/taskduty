import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Layout/NavBar";
import Home from "./Pages/Home";
import AllTask from "./Pages/AllTask";
import EditTask from "./Pages/EditTask";
import NewTask from "./Pages/NewTask";
import toast, { Toaster } from "react-hot-toast";
import ClientTask from "./Components/ClientTask";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/AllTask" element={<AllTask />} />
          <Route path="/EditTask/:userId" element={<EditTask />} />
          <Route path="/NewTask" element={<NewTask />} />
          <Route path="/ClientTask/:userId" element={<ClientTask />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
