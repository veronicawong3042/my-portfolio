import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowDown } from "react-icons/io";

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
                console.log('stack data:', stackData);

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
                                <button className='close-button' onClick={onClose}><IoClose /></button>
                                <ul className='tab-nav'>
                                    <li className='background-heading' onClick={() => updateTab(1)}>{aboutData.acf.background_heading}</li>
                                    <li className='stack-heading' onClick={() => updateTab(2)}>{aboutData.acf.stack_heading}</li>
                                    <li className='faq-heading' onClick={() => updateTab(3)}>{aboutData.acf.faq_heading}</li>
                                </ul>
                                <div className='about-heading-container'>
                                <div className='about-heading'>
                                    <svg className='search-icon' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fill-rule="nonzero"/></svg>
                                    <h1>{aboutData.acf.about_heading}</h1>
                                </div>
                                </div>
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
                                <div>
                                    {stackData.map((stack, index) => (
                                        <div key={index}>
                                            <h3>{stack.title.rendered}</h3>
                                            <div className="skills">
                                            {stack.acf.stack.map((single, skillIndex) => (
                                                <div key={skillIndex}>
                                                    <p>{single}</p>
                                                </div>
                                            ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                </div>
                                <div className={tab === 3 ? "show-tab" : "hide-tab"}>
                                    {aboutData.acf.faq.map((faqItem, index) => (
                                        <div className='faq-section' key={index}>
                                            <div className='question-heading'>
                                                <h3>{faqItem.question}</h3>
                                                <IoIosArrowDown className='down-arrow'/>
                                            </div>
                                            <p>{faqItem.answer}</p>
                                        </div>
                                    ))}
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
