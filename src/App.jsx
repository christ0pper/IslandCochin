import { useScrolled } from './hooks/useScrolled';
import { useHashScroll } from './hooks/useHashScroll';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import BookingBar from './components/sections/BookingBar';
import LeadStatement from './components/sections/LeadStatement';
import DayOut from './components/sections/DayOut';
import Events from './components/sections/Events';
import Experiences from './components/sections/Experiences';
import Food from './components/sections/Food';
import Story from './components/sections/Story';
import Visit from './components/sections/Visit';
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
        <DayOut />
        <Events />
        <Experiences />
        <Food />
        <Story />
        <Visit />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
