import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import Reservations from '@/pages/Reservations';
import Chefs from '@/pages/Chefs';
import Reviews from '@/pages/Reviews';
import Events from '@/pages/Events';
import Contact from '@/pages/Contact';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Toaster richColors />
    </div>
  );
}