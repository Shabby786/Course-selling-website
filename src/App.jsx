import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./Header";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Posts from "./Posts";
import PostDetail from "./PostDetail"; // Adjusted import to match the file name
import Footer from "./Footer";
import PageDetail from "./PageDetails";
import WpFloat from "./WpFloat";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App relative min-h-screen">
        <Header />
        <NavBar />
        <WpFloat />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:slug" element={<PostDetail />} /> {/* Adjusted route for slug */}
          <Route path="/page/:slug" element={<PageDetail />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
