import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { ThemeSwitcher } from './components/theme-switcher';
import { LanguageSwitcher } from './components/language-switcher';
import { LanguageProvider } from './context/language-context';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;