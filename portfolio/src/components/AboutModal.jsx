import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading'
import { IoClose } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Fade } from "react-awesome-reveal";
import 'animate.css';
import FilterStack from './FilterStack';
import pfp from '../images/pfp.png';

const AboutModal = ({ onClose }) => {
    const restBase = 'https://veronica-wong.com/portfolio/wp-json/wp/v2/';
    const aboutPath = restBase + 'pages/9?acf_format=standard';
    const experiencesPath = restBase + 'experiences'; 
    const stackPath = restBase + 'stack'; 

    const [aboutData, setAboutData] = useState({});
    const [experiencesData, setExperiencesData] = useState({});
    const [stackData, setStackData] = useState({});
    const [isLoaded, setLoadStatus] = useState(false)
    const [activeFAQ, setActiveFAQ] = useState(null);
    
    const [tab, setTab] = useState(1)

    function updateTab (id) {
        setTab(id)
    }

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
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
                console.log('about data:', aboutData);


                console.log('Experiences data:', experiencesData);
                console.log('Stack data:', stackData);
                setLoadStatus(true)
            } else {
                setLoadStatus(false);
            }
        };
    
        fetchData();
    }, [aboutPath, experiencesPath, stackPath]);    

    return (
        <>
            {isLoaded ? (
                    <div className="about-entry-content">
                        <section>
                            <div> 
                                <button className='close-button' onClick={onClose}><IoClose /></button>
                                <ul className='tab-nav'>
                                    <li className={tab === 1 ? 'background-heading active' : 'background-heading'} onClick={() => updateTab(1)}>{aboutData.acf.background_heading}</li>
                                    <li className={tab === 2 ? 'stack-heading active' : 'stack-heading'} onClick={() => updateTab(2)}>{aboutData.acf.stack_heading}</li>
                                    <li className={tab === 3 ? 'faq-heading active' : 'faq-heading'} onClick={() => updateTab(3)}>{aboutData.acf.faq_heading}</li>
                                </ul>
                                <div className='about-heading-container'>
                                <div className='about-heading'>
                                    <svg className='search-icon' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fillRule="nonzero"/></svg>
                                    <h1>{aboutData.acf.about_heading}</h1>
                                </div>
                                </div>
                                <div className={tab === 1 ? "show-tab" : "hide-tab"}>
                                    <div className="profile-picture">
                                        <img src={pfp} alt="my profile picture" />
                                    </div>
                                    <div className='about-blurbs'>
                                        {aboutData.acf.about_blurb.map((blurb, index) => (
                                            <div key={index}>
                                                <p>{blurb.about_blurbs}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <h2>{aboutData.acf.experiences_heading}</h2>
                                    <ul className='experiences'>
                                    {experiencesData.map((experience, index) => (
                                        <li key={index}>
                                            <div className="timeline-line"></div>
                                            <svg className='star-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.834 9.686l-4.166.575 3.032 2.914-.74 4.139 3.708-1.982 3.708 1.983-.74-4.139 3.032-2.915-4.166-.575-1.834-3.784-1.834 3.784z"/></svg>
                                            <Fade duration={1500} >
                                                <h3>{experience.title.rendered}</h3>
                                                <p>{experience.acf.date_range}</p>
                                                <p>{experience.acf.description}</p>
                                            </Fade>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={tab === 2 ? "show-tab" : "hide-tab"}>
                                    <FilterStack/>
                                </div>
                                <div className={tab === 3 ? "show-tab" : "hide-tab"}>
                                    {aboutData.acf.faq.map((faqItem, index) => (
                                        <div className='faq-section' key={index}>
                                            <div className='question-heading' onClick={() => toggleFAQ(index)}>
                                                <h3>{faqItem.question}</h3>
                                                {activeFAQ === index ? <IoIosArrowUp className="up-arrow" /> : <IoIosArrowDown className="down-arrow" />}
                                            </div>
                                            <p className={activeFAQ === index ? 'show-tab' : 'hide-tab'}>{faqItem.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
            )
            : (<Loading/>)}
        </>
    );
};

export default AboutModal;
