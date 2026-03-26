import { About } from './components/portfolio/About'
import { Education } from './components/portfolio/Education'
import { Experience } from './components/portfolio/Experience'
import { Footer } from './components/portfolio/Footer'
import { Header } from './components/portfolio/Header'
import { Hero } from './components/portfolio/Hero'
import { Profiles } from './components/portfolio/Profiles'
import { SideProject } from './components/portfolio/SideProject'
import { Skills } from './components/portfolio/Skills'

export default function App() {
  return (
    <div className="min-h-svh min-h-dvh min-w-0 overflow-x-clip bg-(--background) text-(--foreground) antialiased">
      <a
        href="#main"
        className="absolute left-[-9999px] top-4 z-100 rounded-lg bg-(--accent) px-4 py-2 text-sm font-semibold text-(--accent-foreground) shadow-md focus:left-[max(1rem,env(safe-area-inset-left))] focus:top-[max(1rem,env(safe-area-inset-top))] focus:outline-2 focus:outline-offset-2 focus:outline-(--ring)"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="min-w-0">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <SideProject />
        <Profiles />
        <Footer />
      </main>
    </div>
  )
}
