import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Team from './pages/Team.tsx'
import Research from './pages/Research.tsx'
import ObjectCentricGrounding from './pages/research/ObjectCentricGrounding.tsx'
import Layout from './components/Layout.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="research" element={<Research />} />
          <Route path="research/object-centric-grounding" element={<ObjectCentricGrounding />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
