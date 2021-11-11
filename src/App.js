import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        
        <main className="mt-5">
          {/* Configure the Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
