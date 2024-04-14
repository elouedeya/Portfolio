import { BrowserRouter as Router, Routes,  Route} from "react-router-dom";


import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Hire_me from "./components/Hire_me"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"


function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Services />
            <Portfolio />
            <Hire_me />
            <Footer />
          </>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

