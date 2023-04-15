import React from 'react';
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import CardList from './components/CardList/CardList'
import CardDetails from './components/CardDetails/CardDetails';
import EventList from './components/EventList/EventList';
import EventDetails from './components/EventDetails/EventDetails'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<CardList />} />
        <Route path="events" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/details/:id" element={<CardDetails />} />
        {/* <Route path="/details/:id" element={ window.innerWidth > 784 ? <CardDetails/> : <MobileDetails/>} /> */}
      </Route>
    </Routes>
  </Router>,
);
