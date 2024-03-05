import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'

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
        <p className="copyright">2024 Veronica Wong</p>
      </footer>
    </Router>
  )
}

export default App
