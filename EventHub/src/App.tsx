import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventDetailsPage from './pages/EventDetailsPage';
import RegisteredEventsPage from './pages/RegisteredEventsPage';
import Layout from './components/Layout';
import { EventProvider } from './context/EventContext';

function App() {
  return (
    <EventProvider>
      <Router>
        
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/event/:id" element={<EventDetailsPage />} />
              <Route path="/registered" element={<RegisteredEventsPage />} />
            </Routes>
          </Layout>
       
      </Router>
    </EventProvider>
  );
}

export default App;
