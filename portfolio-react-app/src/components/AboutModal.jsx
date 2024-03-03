import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { IoClose } from 'react-icons/io5';

const AboutModal = ({ onClose }) => {
    const restBase = 'https://veronica-wong.com/portfolio/wp-json/wp/v2/'
    const restPath = restBase + 'pages/9?acf_format=standard'
    const [restData, setData] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

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

    return (
        <div>
            {isLoaded ? (
                <article id={`post-${restData.id}`}>
                    <div className="entry-content">
                        <section>
                            <div>
                                <button onClick={onClose}><IoClose /></button>
                                <h1>{restData.acf.about_heading}</h1>
                                <ul>
                                    <li>{restData.acf.background_heading}</li>
                                    <li>{restData.acf.stack_heading}</li>
                                    <li>{restData.acf.faq_heading}</li>
                                </ul>
                                <p>{restData.acf.about_blurb}</p>
                            </div>
                        </section>
                    </div>
                </article>
            ) : (
                <Loading />
                )}
        </div>
    );
};

export default AboutModal;
