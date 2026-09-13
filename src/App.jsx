import { useScrolled } from './hooks/useScrolled';
import { useHashScroll } from './hooks/useHashScroll';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import BookingBar from './components/sections/BookingBar';
import LeadStatement from './components/sections/LeadStatement';
import Stay from './components/sections/Stay';
import Dining from './components/sections/Dining';
import Experiences from './components/sections/Experiences';
import Events from './components/sections/Events';
import CallToAction from './components/sections/CallToAction';

export default function App() {
  useScrolled();
  useHashScroll();

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <Header />

      <main id="main">
        <Hero />
        <BookingBar />
        <LeadStatement />
        <Stay />
        <Dining />
        <Experiences />
        <Events />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
