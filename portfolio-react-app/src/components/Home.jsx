import { useState, useEffect } from 'react'
import Loading from './Loading'

const Home = ( {restBase} ) => {
    const restPath = restBase + 'pages/9?acf_format=standard'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
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
        { isLoaded ?
            <article id={`post-${restData.id}`}>
                <div className="entry-content">
                    <section>
                        <div>
                            <h1>hi! my name is {restData.acf.name}</h1>
                            <p>{restData.acf.introduction}</p>
                        </div>
                        <div className='nav-folders'>
                            {restData.acf.nav_links.map((item, index) => (
                            <button key={index}>
                                <img src={item.folder_icon} alt='folder icon'/>
                                <p>{item.nav_link}</p>
                            </button>
                            ))}
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
