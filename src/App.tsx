import './redesign/portfolio.css';
import { Nav, Hero, About } from './redesign/SectionsTop';
import { Experience, Skills, Work } from './redesign/SectionsWork';
import { Contact, Footer } from './redesign/SectionsContact';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
