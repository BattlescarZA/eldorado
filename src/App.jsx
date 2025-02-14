import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Fixed Background */}
        <div className="fixed inset-0 -z-10 bg-gray-900">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-background-carousel" />
        </div>

        {/* Content */}
        <div className="relative">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}
