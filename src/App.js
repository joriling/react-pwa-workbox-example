import React from "react";
import Home from './pages/home'
import TopPicks from "./pages/top-picks";

import './styles/style.css'

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return  (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="top-picks" element={<TopPicks />}></Route>
      </Routes>
    </BrowserRouter>
    );
  }
}

export default App