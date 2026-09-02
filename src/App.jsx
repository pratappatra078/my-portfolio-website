import { Navbar, Hero, About, Skills, Projects, Experience, Process, Footer } from './components'
import ScrollProgress from './components/ScrollProgress'
import ScrollTop from './components/ScrollTop'
import Loader from './components/Loader'

export default function App() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Process />
        <Footer />
      </main>
      <ScrollTop />
    </>
  )
}
