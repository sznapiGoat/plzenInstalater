import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { About } from '@/components/sections/About'
import { Process } from '@/components/sections/Process'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'

function App() {
  return (
    <div className="min-h-[100dvh] bg-surface">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <About />
        <Process />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
