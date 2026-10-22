import { useEffect, useState } from 'react';
import './redesign/portfolio.css';
import { Nav, Hero, About } from './redesign/SectionsTop';
import { Highlights, Experience, Skills, Work } from './redesign/SectionsWork';
import { Contact, Footer } from './redesign/SectionsContact';
import { CaseStudy, CASE_STUDY_HASH } from './redesign/CaseStudy';

function App() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHash = () => { setHash(window.location.hash); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <>
      <Nav />
      {hash === CASE_STUDY_HASH ? <CaseStudy /> : (
        <main>
          <Hero />
          <About />
          <Highlights />
          <Experience />
          <Skills />
          <Work />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  );
}

export default App;
