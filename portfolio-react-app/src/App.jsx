import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Home from './components/Home'
import AboutModal from './components/AboutModal'

function App() {
  
  const restBase = 'https://veronica-wong.com/portfolio/wp-json/wp/v2/'

  // const featuredImage = ( featuredImageObject ) => {
  //   // let imgWidth = featuredImageObject.media_details.sizes.full.width;
  //   // let imgHeight = featuredImageObject.media_details.sizes.full.height;
  //   // let imgURL = featuredImageObject.source_url;
  //   // let img = `<img src="${imgURL}" 
  //   //     width="${imgWidth}"
  //   //     height="${imgHeight}"
  //   //     alt="${featuredImageObject.alt_text}"
  //   //     srcset="${imgURL} ${imgWidth}w,
  //   //     ${featuredImageObject.media_details.sizes.large ? featuredImageObject.media_details.sizes.large.source_url + ' 1024w,' : ''}
  //   //     ${featuredImageObject.media_details.sizes.medium_large ? featuredImageObject.media_details.sizes.medium_large.source_url + ' 768w,' : ''}
  //   //     ${featuredImageObject.media_details.sizes.medium ? featuredImageObject.media_details.sizes.medium.source_url + ' 300w' : ''}"
  //   //     sizes="(max-width: ${imgWidth}) 100vw, ${imgWidth}px">`;
    
  //   let imgURL = featuredImageObject.source_url;
  //   let img = `<img src="${imgURL}" alt="${featuredImageObject.alt_text}">`;
  //   return {__html: img}
  // }

  return (
    <Router basename="/">
      <header id="masthead" className="site-header">
        <div className="site-branding">
          {/* <p className="site-title">Headless WordPress App</p> */}
        </div>
        <nav className="site-navigation">
          <ul>
            {/* <li><NavLink to='/' end>Home</NavLink></li> */}
          </ul>
        </nav>
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
