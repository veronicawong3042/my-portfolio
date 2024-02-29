import { useState, useEffect } from 'react'
import Loading from './Loading'

const Home = ( {restBase} ) => {
    const restPath = restBase + 'pages/9'
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
                        <h1>hi! my name is {restData.acf.name}</h1>
                        <p>{restData.acf.introduction}</p>
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
