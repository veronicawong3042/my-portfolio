import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { IoClose } from 'react-icons/io5';

const SingleWorkModal = ({ onClose, selectedWork }) => {
    const restBase = 'https://veronica-wong.com/portfolio/wp-json/wp/v2/';
    const restPath = restBase + 'pages/9?acf_format=standard';
    const [restData, setRestData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);

    const [tab, setTab] = useState(1)

    function updateTab (id) {
        setTab(id)
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

    return (
        <div>
            {isLoaded ? (
                <article id={`post-${restData.id}`}>
                    <div className="work-entry-content">
                        <section>
                            <div>
                                <button className='close-button' onClick={onClose}><IoClose /></button>
                                <ul className='tab-nav'>
                                    <li className='overview-heading' onClick={() => updateTab(1)}>{restData.acf.project_overview_heading}</li>
                                    <li className='process-heading' onClick={() => updateTab(2)}>{restData.acf.project_process_heading}</li>
                                </ul>
                                <h2>{selectedWork.title.rendered}</h2>

                                <div className={tab === 1 ? "show-tab" : "hide-tab"}>
                                {selectedWork.acf.project_images && (
                                    <img src={selectedWork.acf.project_images} alt="" />
                                )}
                                    <p>{selectedWork.acf.project_summary}</p>
                                    <a href={selectedWork.acf.live_site_link}>Live Site</a>
                                    <a href={selectedWork.acf.github_link}>Github</a>
                                    <h3>{selectedWork.acf.duration_heading}</h3>
                                    <p>{selectedWork.acf.duration}</p>
                                    <h3>{selectedWork.acf.team_heading}</h3>
                                    {selectedWork.acf.team.map((teamMember, index) => (
                                    <div key={index}>
                                        <p>{teamMember.team_member}</p>
                                    </div>
                                    ))}

                                    <h3>{selectedWork.acf.roles_heading}</h3>
                                    {selectedWork.acf.roles.map((role, index) => (
                                            <div key={index}>
                                                <p>{role}</p>
                                            </div>
                                        ))}
                                    <h3>{selectedWork.acf.toolkit_heading}</h3>
                                    {selectedWork.acf.toolkit.map((tool, index) => (
                                    <div key={index}>
                                        <p>{tool.tool}</p>
                                    </div>
                                    ))}
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
                                            <img src={processItem.project_images} alt="" />
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
