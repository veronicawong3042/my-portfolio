import { useState, useEffect } from 'react';
import Loading from './Loading';
import { IoClose } from 'react-icons/io5';

const ContactModal = ({ onClose }) => {
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
                    <div className="contact-entry-content">
                        <section>
                            <div>
                                <button className='close-button' onClick={onClose}><IoClose /></button>
                                <ul className='tab-nav'>
                                    <li className='contact-tab'>contact</li>
                                </ul>
                                <div className="contact-heading-container">
                                <div className="contact-heading">
                                    <svg className='search-icon' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fill-rule="nonzero"/></svg>
                                    <h1>{restData.acf.contact_heading}</h1>
                                </div>
                                </div>
                                <p>{restData.acf.contact_blurb}</p>
                                <a href={restData.acf.contact_links[0].url}>LinkedIn</a>
                                <a href={restData.acf.contact_links[1].url}>Github</a>
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

export default ContactModal