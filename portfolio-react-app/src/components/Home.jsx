import { useState, useEffect } from 'react'
import Loading from './Loading'
import AboutModal from './AboutModal'
import WorksModal from './WorksModal'
import ContactModal from './ContactModal'

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
                    <div className="entry-content">
                        <section>
                            <div>
                                <h1>hi! my name is {restData.acf.name}</h1>
                                <p>{restData.acf.introduction}</p>
                            </div>
                            <div className='nav-folders'>

                                <button onClick={() => setShowModal1(true)}>
                                    <img src={restData.acf.nav_links[0].folder_icon} alt='folder icon' />
                                    <p>{restData.acf.nav_links[0].nav_link}</p>
                                </button>
                                {showModal1 && <WorksModal onClose={() => setShowModal1(false)} />}

                                <button onClick={() => setShowModal2(true)}>
                                    <img src={restData.acf.nav_links[1].folder_icon} alt='folder icon' />
                                    <p>{restData.acf.nav_links[1].nav_link}</p>
                                </button>
                                {showModal2 && <AboutModal onClose={() => setShowModal2(false)} />}

                                <button onClick={() => setShowModal3(true)}>
                                    <img src={restData.acf.nav_links[2].folder_icon} alt='folder icon' />
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
