import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  
  const restBase = 'https://veronica-wong.com/portfolio/wp-json/wp/v2/'

  return (
    <Router basename="/">
      <header id="masthead" className="site-header">
        <div className="site-branding">
        </div>
      </header>
      <main id="main">
        <Routes>
          <Route path='/' element={<Home restBase={restBase} />} />
        </Routes>
      </main>
      <footer>
        <p className="copyright">&copy; 2024 Veronica Wong</p>
        <p>powered by &#127836;, &#127834;, and &#9749;</p>
      </footer>
    </Router>
  )
}

export default App
