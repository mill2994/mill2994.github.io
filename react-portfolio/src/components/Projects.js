import React, { useEffect, useRef } from 'react';
import './Projects.css';
import wildfire_img from "./Project_images/WRiFTHomeowner.png";
import discordbot_img from "./Project_images/Discord.png";
import gpa_img from "./Project_images/GPA_calc.png";

const projectData = [
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
    },
    {
        title: 'Pancake or Waffle?',
        description: 'A python program developed using tensorFlow to differentiate between images of Pancakes and Waffles. Selenium is utilized to quickly scrape and gather images from Google.',
        languages: ['Python', 'Selenium', 'TensorFlow'],
        source: "https://github.com/mill2994/pancakeOrWaffle.git"
    },
    {
        title: 'Portfolio Site',
        description: 'Located here! I hand built this site to give myself full control over all aspects of the site. My goal was to keep it streamlined, yet unique and to have a fun space to keep my projects.',
        languages: ['JavaScript', 'React', 'HTML', 'CSS'],
        source: "https://github.com/mill2994/mill2994.github.io.git"
    },
    {
        title: 'Tower Defense Based Game',
        description: 'Created in C++, utilizing fundamental OOP concepts, such as inheritance for the various tower and balloons, polymorphism for the towers features, and encapsulation for the various required classes.',
        languages: ['C++']
    }
];

function Projects() {
    const cardsRef = useRef([]);
    const observer = useRef(null); // Ref for IntersectionObserver instance

    useEffect(() => {
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

        cardsRef.current.forEach(card => observer.current.observe(card));

        return () => {
            //cardsRef.current.forEach(card => {
            //    if (card) observer.current.unobserve(card);
            //});

            // Cleanup function to disconnect observer
            observer.current.disconnect();
        };
    }, []); // Empty dependency array ensures effect runs only on mount

    return (
        <div className="projects">

            <div className="project-row">
                {projectData.map((project, index) => (
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
        </div>
    );
}

export default Projects;






