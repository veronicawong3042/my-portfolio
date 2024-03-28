import { useState, useEffect, useContext } from 'react'
import Loading from '../components/Loading'
import AboutModal from '../components/AboutModal'
import WorksModal from '../components/WorksModal'
import ContactModal from '../components/ContactModal'
import Header from '../components/Header'
import { ThemeContext } from '../context/ThemeContext';

const Home = ({ restBase }) => {
    const restPath = restBase + 'pages/9?acf_format=standard'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)
    const [activeModal, setActiveModal] = useState(null)
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if (response.ok) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])

    const openModal = (modalId) => {
        setActiveModal(modalId)
    }

    const closeModal = () => {
        setActiveModal(null)
    }

    return (
        <>
            {isLoaded ?
                <article id={`post-${restData.id}`} className={`${theme}`}>
                    <div>
                        <Header/>
                    </div>
                    <div className="home-entry-content">
                        <section>
                            <div className='intro'>
                                <h1>{restData.acf.name}'s desktop</h1>
                                <p>{restData.acf.introduction}</p>
                            </div>
                            <div className='nav-folders'>
                                {restData.acf.nav_links.map((link, index) => (
                                    <button key={index} className='folder-button' onClick={() => openModal(index)}>
                                        <span className='folder-svg' dangerouslySetInnerHTML={{__html: link.folder_icon}}></span>
                                        <p>{link.nav_link}</p>
                                    </button>
                                ))}
                            </div>
                        </section>
                    </div>
                    {activeModal !== null && (
                        <div className="modal-container">
                            {activeModal === 0 && <WorksModal onClose={closeModal} />}
                            {activeModal === 1 && <AboutModal onClose={closeModal} />}
                            {activeModal === 2 && <ContactModal onClose={closeModal} />}
                        </div>
                    )}
                    <footer>
                        <p className="copyright">&copy; 2024 Veronica Wong</p>
                        <p>powered by &#127836;, &#127834;, and &#9749;</p>
                    </footer>
                </article>
                :
                <Loading />
            }
        </>
    )
}

export default Home
