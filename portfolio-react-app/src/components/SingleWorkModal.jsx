import { useState, useEffect } from 'react';
import Loading from './Loading';
import { IoClose } from 'react-icons/io5';

const WorksModal = ({ onClose }) => {
    const restBase = 'https://veronica-wong.com/portfolio/wp-json/wp/v2/';
    const restPath = restBase + 'pages/9?acf_format=standard';
    const worksPath = restBase + 'works'; // Endpoint for the works CPT
    const [restData, setRestData] = useState([]);
    const [worksData, setWorksData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath);
            const worksResponse = await fetch(worksPath);

            if (response.ok && worksResponse.ok) {
                const restData = await response.json();
                const worksData = await worksResponse.json();
                setRestData(restData);
                setWorksData(worksData);
                console.log('Works data:', worksData);
                setLoadStatus(true);
            } else {
                console.error('Failed to fetch data');
                setLoadStatus(false);
            }
        };

        fetchData();
    }, [restPath, worksPath]);

    return (
        <div>
            {isLoaded ? (
                <article id={`post-${restData.id}`}>
                    <div className="entry-content">
                        <section>
                            <div>
                                <button onClick={onClose}><IoClose /></button>
                                <h1>{restData.acf.all_works_heading}</h1>
                                <p>{restData.acf.project_overview}</p>
                            </div>
                            <div className='all-works'>
                                <ul>
                                    {worksData.map((work, index) => (
                                        <li key={index}>
                                            <h2>{work.title.rendered}</h2>
                                            <img src={work.acf.project_images} alt="" />
                                            <p>{work.acf.project_summary}</p>
                                        </li>
                                    ))}
                                </ul>
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

export default WorksModal;
