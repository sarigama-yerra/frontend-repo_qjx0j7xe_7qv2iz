import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { TransitionSection, SolutionsSection, StoriesSection, InvestorsCta } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TransitionSection />
        <SolutionsSection />
        <StoriesSection />
        <InvestorsCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
