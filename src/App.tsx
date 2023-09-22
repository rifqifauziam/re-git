// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from './page/searchPage';
import ProjectDetailPage from './page/projectDetail';
import { AnimatedAppBarTitle } from './style/style';


const App: React.FC = () => {
  useEffect(() => {
    document.title = 'GitHub Project Viewer';
  }, []);
  
  return (
    <Router>
      <div>
        <AnimatedAppBarTitle>Github Project Viewer</AnimatedAppBarTitle>
        <Routes>
          <Route path="/" element={<SearchPage/>} />
          <Route path="/project/:userName/:repoName" element={<ProjectDetailPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
