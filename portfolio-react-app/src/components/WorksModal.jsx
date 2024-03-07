import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { IoClose } from 'react-icons/io5';
import SingleWorkModal from './SingleWorkModal';

const WorksModal = ({ onClose }) => {
    const restBase = 'https://veronica-wong.com/portfolio/wp-json/wp/v2/';
    const restPath = restBase + 'pages/9?acf_format=standard';
    const worksPath = restBase + `works?_embed`;
    const [restData, setRestData] = useState([]);
    const [worksData, setWorksData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);
    const [showSingleWorkModal, setShowSingleWorkModal] = useState(false); 
    const [selectedWork, setSelectedWork] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath);
            const worksResponse = await fetch(worksPath);

            if (response.ok && worksResponse.ok) {
                const restData = await response.json();
                const worksData = await worksResponse.json();
                setRestData(restData);
                setWorksData(worksData);
                console.log('works data:', worksData)
                setLoadStatus(true);
            } else {
                console.error('Failed to fetch data');
                setLoadStatus(false);
            }
        };

        fetchData();
    }, [restPath, worksPath]);

    const handleWorkClick = (work) => {
        setSelectedWork(work);
        setShowSingleWorkModal(true);
    };

    return (
        <div>
            {isLoaded ? (
                <article id={`post-${restData.id}`}>
                    <div className="works-entry-content">
                        <section>
                            <div className='works-overview'>
                                <button className='close-button' onClick={onClose}><IoClose /></button>
                                <h1>{restData.acf.all_works_heading}</h1>
                                <p>{restData.acf.project_overview}</p>
                            </div>
                            {worksData.map((work) => (
                                <div className='all-works' key={work.id} id={`work-${work.id}`}>
                                    <button onClick={() => handleWorkClick(work)}>
                                        <img src={work._embedded['wp:featuredmedia'][0].source_url} alt="folder icon" />
                                        <p>{work.title.rendered}</p>
                                    </button>
                                </div>
                            ))}
                        </section>
                    </div>
                </article>
            ) : (
                <Loading />
            )}
            {showSingleWorkModal && (<SingleWorkModal onClose={() => setShowSingleWorkModal(false)} selectedWork={selectedWork} />)}
        </div>
    );
};

export default WorksModal;
