import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";
import Game from "./pages/Game";
import StoryFlipbook from "./pages/StoryFlipbook";
import Biography from "./pages/Biography";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/game" element={<Game />} />
          <Route path="/flipbook" element={<StoryFlipbook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

