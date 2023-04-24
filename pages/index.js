import Navbar from '@/Components/Navbar'
import Main from '@/Components/Main'
import About from '@/Components/About'
import Skills from '@/Components/Skills'
import Projext from '@/Components/Projext'
import Contact from '@/Components/Contact'
const index = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Projext/>
      <Contact/>
    </div>
  )
}

export default index