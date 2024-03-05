import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { IoClose } from 'react-icons/io5';

const SingleWorkModal = ({ onClose, selectedWork }) => {
    const restBase = 'https://veronica-wong.com/portfolio/wp-json/wp/v2/';
    const restPath = restBase + 'pages/9?acf_format=standard';
    const [restData, setRestData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath);

            if (response.ok) {
                const restData = await response.json();
                setRestData(restData);
                setLoadStatus(true);
            } else {
                console.error('Failed to fetch data');
                setLoadStatus(false);
            }
        };

        fetchData();
    }, [restPath]);

    return (
        <div>
            {isLoaded ? (
                <article id={`post-${restData.id}`}>
                    <div className="entry-content">
                        <section>
                            <div>
                                <button onClick={onClose}><IoClose /></button>
                                <h2>{selectedWork.title.rendered}</h2>
                                <img src={selectedWork.acf.project_images} alt="" />
                                <p>{selectedWork.acf.project_summary}</p>
                                <a href={selectedWork.acf.live_site_link}>Live Site</a>
                                <a href={selectedWork.acf.github_link}>Github</a>
                                <p>{selectedWork.acf.duration}</p>
                                <p>{selectedWork.acf.team}</p>
                                <p>{selectedWork.acf.roles}</p>
                                <p>{selectedWork.acf.toolkit}</p>
                                <p>{selectedWork.acf.project_process}</p>
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

export default SingleWorkModal;
