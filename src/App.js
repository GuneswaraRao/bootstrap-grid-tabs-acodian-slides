import React from 'react';
import Demo from "./Route";
import Cards from "./Cards";
import GridLayout from "./GridLayout";
import Navigation from "./Navigation";
import Sliders from "./Sliders";
//import "./styles.css";
import Tabledata from "./Tabledata";
import Tabing from "./Tabs";
import AlertDismissible from "./Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accod from "./Accod";
import Alert from "./Alert";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>

          {/* <Route path="/" element={<Navigation />} /> */}
          <Route path="/Sliders" element={<Sliders />} />
          <Route path="/Tabledata" element={<Tabledata />} />
          <Route path="/Cards" element={<Cards />} />
          <Route path="/GridLayout" element={<GridLayout />} />
          <Route path="/Tabing" element={<Tabing />} />
          <Route path="/Demo" element={<Demo />} />
          <Route path="/AlertDismissible" element={<AlertDismissible />} />
          <Route path="/Accod" element={<Accod />} />
          <Route path="/Alert" element={<Alert />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
