import React, { useEffect, useRef } from 'react';
import './Home.css';
import './ContactForm.css';
import cloudImage from "./icons/cloud-divider.png";
import planetImage from "./icons/planet-divider.png";
import wildfire_img from "./Project_images/WRiFTHomeowner.png";
import discordbot_img from "./Project_images/Discord.png";
import gpa_img from "./Project_images/GPA_calc.png";



const projectData_featured = [
    {
        title: 'Wildfire Risk Forecast Tool',
        description: 'Partnered with the Anthropocene Institute to develop an educational wildfire simulator. Users can input parameters like wind, temperature, and humidity using JavaScript. A simulated fire is plotted, and economic/health data is calculated using Python and then presented to the user.  ',
        languages: ['Python', 'Flask', 'HTML', 'JavaScript'],
        image: wildfire_img,
        source: "https://github.com/ampersandmcd/WRiFT.git",
    },
    {
        title: 'Discord Bot',
        description: 'A deployed discord bot, BenBot, which interacts with users through a series of commands. Capable of tracking dates for birthday messages, responding to keywords, saving to and retrieving messages from a database, and user specific behavior.',
        languages: ['Python', 'MongoDB'],
        image: discordbot_img,
        source: "https://github.com/mill2994/BenBot.git"
    },
    {
        title: 'GPA Calculator',
        description: 'My very first programming project I developed, to solve a real problem I had. A web based GPA calculator with two main functions: To calculate a new GPA with new grades added, and to calculate the grades required to achieve a desired final GPA.',
        languages: ['PHP', 'HTML'],
        image: gpa_img,
        source: "https://github.com/mill2994/GPA-Calculator.git"
    }
];

function Home({ setActivePage, isDarkMode }) {
    const cardsRef = useRef([]);
    const observer = useRef(null);

    useEffect(() => {
        const starContainer = document.querySelector('.star-container');
        const starCount = 25;
        const sunElement = document.querySelector('.sun-container');
        const moonElement = document.querySelector('.moon-container');

        for (let i = 1; i <= starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star', `star${i}`);
            starContainer.appendChild(star);
        }

        const contContainer = document.querySelector('.continents-container');
        const contCount = 48;

        for (let i = 1; i <= contCount; i++) {
            const continent = document.createElement('div');
            continent.classList.add('continents', `cont${i}`);
            contContainer.appendChild(continent);
        }

        if (isDarkMode) {
            /* Starts moving out of frame first */
            /* Movement out of frame is repeated, because if other button is hit, then this one again quickly */
            /* Suns timer to be added starts, then the removal in this class executes immediately, then the addition timer ends */
            /* This causes the sun to be added, but hidden, so the animation on next press is not there */
            /* The first is still necessary, because we want to move before it becomes hidden */

            /* Also cant remove the moon hidden first before timeout, because timer for adding it will apply in day mode after */
            /* Click day mode which start .5 second timer to hide moon, switch to dark mode quickly which instantly removes hidden tag, */
            /* Timer then ends, and hidden tag is added, resulting in no moon. Thus, need to remove hidden after own timer ends */
            moonElement.classList.remove('hidden');

            sunElement.classList.remove('in');
            sunElement.classList.add('out');
            setTimeout(() => {
                sunElement.classList.remove('in');
                sunElement.classList.add('out');

                sunElement.classList.add('hidden');

                moonElement.classList.remove('hidden');
                moonElement.classList.remove('out');
                moonElement.classList.add('in');
            }, 400); // 1000ms matches the CSS transition duration
        } else {
            moonElement.classList.remove('in');
            moonElement.classList.add('out');

            setTimeout(() => {
                moonElement.classList.remove('in');
                moonElement.classList.add('out');

                moonElement.classList.add('hidden');

                sunElement.classList.remove('hidden');
                sunElement.classList.remove('out');
                sunElement.classList.add('in');
            }, 400);

        }


        // IntersectionObserver setup
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, {
            threshold: 0.8 // Adjust this value as needed
        });

        // Observe all cards
        cardsRef.current.forEach(card => {
            if (card) observer.current.observe(card);
        });

        // Cleanup function to unobserve all cards
        return () => {
            //cardsRef.current.forEach(card => {
            //    if (card) observer.current.unobserve(card);
            //});
            observer.current.disconnect();
        };

    }, [isDarkMode]);

    return (
        <div className={`home ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="welcome-sign">
                <div className="intro-background">
                        <div className="star-container">
                        </div>

                    <div className="intro-container">
                        <div className="intro">
                            <h1 className="larger">Hello!</h1>
                            <h1 className="subtitle">I'm Ben.</h1>
                            <h1 className="smaller">An Aspiring</h1>
                            <h1 className="smaller2">Software Engineer</h1>
                            <h1 className="smaller3">&#x2193;</h1>
                        </div>
                    </div>

                    <div className="sun-container">
                        <div className="sun">
                            <div className="circle"></div>

                            <div className="triangle-container">
                                <div className="triangle"></div>
                                <div className="triangle"></div>
                                <div className="triangle"></div>
                                <div className="triangle"></div>
                            </div>
                            <div className="triangle-container2">
                                <div className="triangle"></div>
                                <div className="triangle"></div>
                                <div className="triangle"></div>
                                <div className="triangle"></div>
                            </div>
                        </div>
                    </div>

                    <div className="moon-container hidden">
                        <div className="moon-orbit">
                            <div className="moon">
                                <div className="moon-surface"></div>

                                <div className="crater-container crater1"></div>
                                <div className="crater-container crater2"></div>
                                <div className="crater-container crater3"></div>
                                <div className="crater-container crater4"></div>
                                <div className="crater-container crater5"></div>
                                <div className="crater-container crater6"></div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="split"></div>

            <div className="body">
                <div className="body-background">
                    <div className="about">
                        <h2>About</h2>

                        <p> Creative. Determined. Optimistic.</p>
                        <br/>
                        <p> These three words I try to embody within my life, and here within my portfolio. I've spent the last 6+ years developing a variety of projects, earning my Master's from the University of Michigan, and my Bachelor's from Michigan State. Now, I seek to begin my career and make positive contributions to the world! Outside of cse, I love to watch football, listen to music, play video games with friends, and enjoy quality time with the people close to me. </p>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('me'); }}>More About Me!</a>
                    </div>
                    <div className="page-image-divider">
                        <img
                            src={isDarkMode ? planetImage : cloudImage}
                            alt={isDarkMode ? 'Planet Image Divider' : 'Cloud Image Divider'}
                            width="50" // Adjust size as necessary
                            height="50" // Adjust size as necessary
                        />
                        <img
                            src={isDarkMode ? planetImage : cloudImage}
                            alt={isDarkMode ? 'Planet Image Divider' : 'Cloud Image Divider'}
                            width="50" // Adjust size as necessary
                            height="50" // Adjust size as necessary
                        />
                        <img
                            src={isDarkMode ? planetImage : cloudImage}
                            alt={isDarkMode ? 'Planet Image Divider' : 'Cloud Image Divider'}
                            width="50" // Adjust size as necessary
                            height="50" // Adjust size as necessary
                        />
                    </div>

                    <div className="favorite-projects">
                        <h2>Featured Projects</h2>
                        <div className="project-row">
                            {projectData_featured.map((project, index) => (
                                <div
                                    className="project-card"
                                    key={index}
                                    ref={el => cardsRef.current[index] = el}
                                >
                                    <div className="project-info">
                                        <div className="project-title">{project.title}</div>
                                        <div className="languages">
                                            {project.languages.map((language, langIndex) => (
                                                <span className="language" key={langIndex}>{language}</span>
                                            ))}
                                        </div>
                                        <div className="source-code">
                                            {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer">Source Code</a>}
                                        </div>
                                        <div className="deployed-code">
                                            {project.deployed && <a href={project.deployed} target="_blank" rel="noopener noreferrer">Live Site</a>}
                                        </div>

                                    </div>
                                    <div className="project-description">
                                        {project.image && <img src={project.image} alt={project.title} className="project-image" />}
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('projects'); }}>More Projects</a>
                    </div>

                    <div className="page-image-divider">
                        <img
                            src={isDarkMode ? planetImage : cloudImage}
                            alt={isDarkMode ? 'Planet Image Divider' : 'Cloud Image Divider'}
                            width="50" // Adjust size as necessary
                            height="50" // Adjust size as necessary
                        />
                        <img
                            src={isDarkMode ? planetImage : cloudImage}
                            alt={isDarkMode ? 'Planet Image Divider' : 'Cloud Image Divider'}
                            width="50" // Adjust size as necessary
                            height="50" // Adjust size as necessary
                        />
                        <img
                            src={isDarkMode ? planetImage : cloudImage}
                            alt={isDarkMode ? 'Planet Image Divider' : 'Cloud Image Divider'}
                            width="50" // Adjust size as necessary
                            height="50" // Adjust size as necessary
                        />
                    </div>

                    <div className="contact-title">
                        <h2>Reach Out!</h2>
                    </div>
                    <div className="contact">

                        <div className="surface">
                            <div className="continents-container">
                            </div>
                        </div>

                        <div className="form-info">
                            <form action="https://formspree.io/f/xjkbkvpr" method="POST">
                                <input type="text" id="name" name="name" placeholder="Name" required />
                                <input type="email" id="email" name="email" placeholder="Email" required />
                                <textarea id="message" name="message" placeholder="Message" required></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <br />
                </div>
            </div>

            <br />
        </div>
    );
}

export default Home;


