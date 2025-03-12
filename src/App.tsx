import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SettingsPage from './pages/SettingsPage';
import ReportsPage from './pages/ReportsPage';
import AnalyticsPage from './pages/AnalyticsPage';
// ... other imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;