
import './App.css';
import './style.css';
import Header from './HeaderMain';
import Main from './Home';
import Contact from './contact'
import Jobs from './jobs';
import Login from './login';
import Register from './register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Make sure to import the BrowserRouter
import About from './about';
import ViewCompany from './view_company';
import ViewJobs from './view_job';
import Footer from './FooterMain';
import App1 from './cv-builder/App1';


function App() {
  return (
    <Router>
      <Header /> {/* Header appears on all pages */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/ViewCompany' element={<ViewCompany />} />
        <Route path='/ViewJobs' element={<ViewJobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/App1" element={<App1 />} />

        {/* Add more routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
