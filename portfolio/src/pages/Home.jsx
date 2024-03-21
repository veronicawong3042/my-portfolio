import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import AboutModal from '../components/AboutModal'
import WorksModal from '../components/WorksModal'
import ContactModal from '../components/ContactModal'
import Header from '../components/Header'

const Home = ({ restBase }) => {
    const restPath = restBase + 'pages/9?acf_format=standard'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)
    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if (response.ok) {
                const data = await response.json()
                setData(data)
                console.log(data);
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath])

    return (
        <>
            {isLoaded ?
                <article id={`post-${restData.id}`}>
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
                                <button className='folder-button' onClick={() => setShowModal1(true)}>
                                    <span className='folder-svg' dangerouslySetInnerHTML={{__html:restData.acf.nav_links[0].folder_icon}}></span>
                                    <p>{restData.acf.nav_links[0].nav_link}</p>
                                </button>
                                {showModal1 && <WorksModal onClose={() => setShowModal1(false)} />}

                                <button className='folder-button' onClick={() => setShowModal2(true)}>
                                    <span className='folder-svg' dangerouslySetInnerHTML={{__html:restData.acf.nav_links[0].folder_icon}}></span>
                                    <p>{restData.acf.nav_links[1].nav_link}</p>
                                </button>
                                {showModal2 && <AboutModal onClose={() => setShowModal2(false)} />}

                                <button className='folder-button' onClick={() => setShowModal3(true)}>
                                    <span className='folder-svg' dangerouslySetInnerHTML={{__html:restData.acf.nav_links[0].folder_icon}}></span>
                                    <p>{restData.acf.nav_links[2].nav_link}</p>
                                </button>
                                {showModal3 && <ContactModal onClose={() => setShowModal3(false)} />}
                            </div>

                        </section>
                    </div>
                </article>
                :
                <Loading />
            }
        </>
    )
}

export default Home