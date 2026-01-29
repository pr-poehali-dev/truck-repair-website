import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import About from '@/pages/About'
import Gallery from '@/pages/Gallery'
import Reviews from '@/pages/Reviews'
import Contact from '@/pages/Contact'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
