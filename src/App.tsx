import About from '@/components/about'
import FeaturedProjects from './components/featuredProjects'
import Experience from './components/experience'

function App() {
  return (
    <main className="container max-w-4xl flex-1 flex flex-col mx-auto mt-10">
      <About />
      <FeaturedProjects />
      <Experience />
    </main>
  )
}

export default App
