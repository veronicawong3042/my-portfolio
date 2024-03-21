import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { IoClose } from 'react-icons/io5';

const SingleWorkModal = ({ onClose, selectedWork }) => {
    const restBase = 'https://veronica-wong.com/portfolio/wp-json/wp/v2/';
    const restPath = restBase + 'pages/9?acf_format=standard';
    const [restData, setRestData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);
    const [tab, setTab] = useState(1);
    const [imageData, setImageData] = useState([]);

    function updateTab(id) {
        setTab(id);
    }

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

    useEffect(() => {
        const fetchImageData = async () => {
            const imageDataPromises = selectedWork.acf.project_images.map(async imageId => {
                const response = await fetch(`https://veronica-wong.com/portfolio/wp-json/wp/v2/media/${imageId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch image data');
                }
                return await response.json();
            });

            try {
                const imageData = await Promise.all(imageDataPromises);
                setImageData(imageData); // Update state with complete image data
            } catch (error) {
                console.error(error);
            }
        };

        if (selectedWork && selectedWork.acf && selectedWork.acf.project_images) {
            fetchImageData();
        }
    }, [selectedWork]);

    return (
        <div>
            {isLoaded ? (
                <article id={`post-${restData.id}`}>
                    <div className="work-entry-content">
                        <section>
                            <div>
                                <button className='close-button' onClick={onClose}><IoClose /></button>
                                <ul className='tab-nav'>
                                    <li className={tab === 1 ? 'overview-heading active' : 'overview-heading'} onClick={() => updateTab(1)}>{restData.acf.project_overview_heading}</li>
                                    <li className={tab === 2 ? 'process-heading active' : 'process-heading'} onClick={() => updateTab(2)}>{restData.acf.project_process_heading}</li>
                                </ul>

                                <div className='work-container'>
                                    <div className='work-heading'>
                                        <svg className='search-icon' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fillRule="nonzero"/></svg>
                                        <h1>{selectedWork.title.rendered}</h1>
                                    </div>
                                </div>

                                <div className={tab === 1 ? "show-tab" : "hide-tab"}>
                                    {imageData.map((image, index) => {
                                        const imageUrl = image.source_url || '';
                                        const imageAlt = image.alt_text || '';
                                        return (
                                            <img key={index} src={imageUrl} alt={imageAlt} />
                                        );
                                    })}
                                    
                                    <p>{selectedWork.acf.project_summary}</p>
                                    <div className="links">
                                        <a href={selectedWork.acf.live_site_link}>Live Site</a>
                                        <a href={selectedWork.acf.github_link}>Github</a>
                                    </div>
                                    <div className="work-details">
                                        <div className="duration">
                                            <h3>{selectedWork.acf.duration_heading}</h3>
                                            <p>{selectedWork.acf.duration}</p>
                                        </div>

                                        <div className="toolkit">
                                            <h3>{selectedWork.acf.toolkit_heading}</h3>
                                            {selectedWork.acf.toolkit.map((tool, index) => (
                                                <div key={index}>
                                                    <p>{tool.tool}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="team">
                                            <h3>{selectedWork.acf.team_heading}</h3>
                                            {selectedWork.acf.team.map((teamMember, index) => (
                                                <div key={index}>
                                                    <p>{teamMember.team_member}</p>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <div className="roles">
                                            <h3>{selectedWork.acf.roles_heading}</h3>
                                            <p>{selectedWork.acf.roles}</p>
                                        </div>

                                    </div>
                                </div>
                                <div className={tab === 2 ? "show-tab" : "hide-tab"}>
                                    {selectedWork.acf.project_process.map((processItem, index) => (
                                        <div key={index}>
                                            {processItem.heading && (
                                                <h3>{processItem.heading}</h3>
                                            )}
                                            {processItem.project_detailed_information && (
                                                <p>{processItem.project_detailed_information}</p>
                                            )}
                                            {processItem.project_images && (
                                                <img src={processItem.project_images} alt="project images" />
                                            )}
                                            {processItem.link_to_prototype && (
                                                <a href={processItem.link_to_prototype}>Link to prototype</a>
                                            )}
                                        </div>
                                    ))}
                                </div>
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
