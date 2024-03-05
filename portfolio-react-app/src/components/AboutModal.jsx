import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { IoClose } from 'react-icons/io5';

const AboutModal = ({ onClose }) => {
    const restBase = 'https://veronica-wong.com/portfolio/wp-json/wp/v2/';
    const aboutPath = restBase + 'pages/9?acf_format=standard';
    const experiencesPath = restBase + 'experiences'; 
    const stackPath = restBase + 'stack'; 

    const [aboutData, setAboutData] = useState({});
    const [experiencesData, setExperiencesData] = useState({});
    const [stackData, setStackData] = useState({});
    const [isLoading, setLoading] = useState(true);
    
    const [tab, setTab] = useState(1)

    function updateTab (id) {
        setTab(id)
    }

    useEffect(() => {
        const fetchData = async () => {
            const aboutResponse = await fetch(aboutPath);
            const experiencesResponse = await fetch(experiencesPath);
            const stackResponse = await fetch(stackPath);
    
            if (aboutResponse.ok && experiencesResponse.ok && stackResponse.ok) {
                const aboutData = await aboutResponse.json();
                const experiencesData = await experiencesResponse.json();
                const stackData = await stackResponse.json();

                setAboutData(aboutData);
                setExperiencesData(experiencesData);
                setStackData(stackData);

                console.log('Experiences data:', experiencesData);
                console.log('Stack data:', stackData);
                setLoading(false);
            } else {
                setLoading(false);
            }
        };
    
        fetchData();
    }, [aboutPath, experiencesPath, stackPath]);    

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <article id={`post-${aboutData.id}`}>
                    <div className="about-entry-content">
                        <section>
                            <div>
                                <button onClick={onClose}><IoClose /></button>
                                <h1>{aboutData.acf.about_heading}</h1>
                                <ul>
                                    <li onClick={() => updateTab(1)}>{aboutData.acf.background_heading}</li>
                                    <li onClick={() => updateTab(2)}>{aboutData.acf.stack_heading}</li>
                                    <li onClick={() => updateTab(3)}>{aboutData.acf.faq_heading}</li>
                                </ul>
                                <div className={tab === 1 ? "show-tab" : "hide-tab"}>
                                    <p>{aboutData.acf.about_blurb}</p>
                                    <h2>{aboutData.acf.experiences_heading}</h2>
                                    <ul>
                                    {experiencesData.map((experience, index) => (
                                        <li key={index}>
                                            <h3>{experience.title.rendered}</h3>
                                            <p>{experience.acf.date_range}</p>
                                            <p>{experience.acf.description}</p>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={tab === 2 ? "show-tab" : "hide-tab"}>
                                    <h2>{aboutData.acf.stack_heading}</h2>
                                    <ul>
                                    {stackData.map((stack, index) => (
                                        <li key={index}>
                                            <h3>{stack.title.rendered}</h3>
                                            <p>{stack.acf.stack}</p>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={tab === 3 ? "show-tab" : "hide-tab"}>
                                    <h2>{aboutData.acf.faq_heading}</h2>
                                    <ul>
                                    {aboutData.acf.faq.map((faqItem, index) => (
                                        <div key={index}>
                                            <h3>{faqItem.question}</h3>
                                            <p>{faqItem.answer}</p>
                                        </div>
                                    ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </article>
            )}
        </div>
    );
};

export default AboutModal;
