import React, { useState } from 'react';
import './Me.css';
import image1 from './Life/BEATosu.jpeg';
import image2 from './Life/boyne.JPG';
import image3 from './Life/cat-sunset.jpeg';
import image4 from './Life/CedarPointPinball.JPG';
import image5 from './Life/falls.JPG';
import image6 from './Life/flight.jpeg';
import image7 from './Life/jellyfish.jpeg';
import image8 from './Life/minecraft.PNG';
import image9 from './Life/msu.jpeg';
import image10 from './Life/msu-stadium.JPG';
import image11 from './Life/northern-lights.jpeg';
import image12 from './Life/peppy.PNG';
import image13 from './Life/roch.jpeg';
import image14 from './Life/UmichCourt.JPG';
import image15 from './Life/wheel.jpeg';
import image16 from './Life/zombies.PNG';
import goldenRecord from './golden-record.png';
import cloudImage from "./icons/cloud-divider.png";
import planetImage from "./icons/planet-divider.png";

function Me({ isDarkMode }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [isGoldenRecordVisible, setIsGoldenRecordVisible] = useState(true);

    const images = [
        [image1, 'my life 1'],
        [image2, 'my life 2'],
        [image3, 'my life 2'],
        [image4, 'my life 2'],
        [image5, 'my life 2'],
        [image6, 'my life 2'],
        [image7, 'my life 2'],
        [image8, 'my life 2'],
        [image9, 'my life 2'],
        [image10, 'my life 2'],
        [image11, 'my life 2'],
        [image12, 'my life 2'],
        [image13, 'my life 2'],
        [image14, 'my life 2'],
        [image15, 'my life 2'],
        [image16, 'my life 2'],

    ];

    const handleNext = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
            setIsFading(false);
        }, 400); // Match the transition duration
    };

    const handlePrev = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
            setIsFading(false);
        }, 400); // Match the transition duration
    };

    const handleGoldenRecordClick = () => {
        setIsFading(true);
        setTimeout(() => {
            setIsGoldenRecordVisible(false);
            setIsFading(false);
        }, 500); // Match the transition duration
    };

    return (
        <div className="me">
            <div className="me-intro">
                <p>Contained aboard the Voyager spacecraft, is a Golden Record. This record contains 116 images of humanity, of our cultures, and of our planet. These images, when decoded, will show alien life, what being human means. </p>
                <br />
                <p>To show what it means to be me, I present my own 16 image Golden Record...</p>

                <div className="page-image-divider-me" >
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

            </div>


            {isGoldenRecordVisible ? (
                <div className={`golden-message ${isFading ? 'fade' : ''}`}>
                    <p>Click the record to decode it, and begin.</p>
                    <br />

                    <img
                        src={goldenRecord}
                        alt="Golden Record"
                        className="golden-record"
                        onClick={handleGoldenRecordClick}
                    />
                </div>
            ) : (
                <div>
                    <div className="frame-container">
                        <div className="me-border">
                            <div className="image-container">
                                <img
                                    src={images[currentImageIndex][0]}
                                    alt={images[currentImageIndex][1]}
                                    className={`scrolling-image ${isFading ? 'fade' : ''}`}
                                    onClick={handleNext}
                                />
                            </div>
                        </div>
                    </div>


                    <div className={`image-num-container ${isDarkMode ? 'dark-mode' : ''}`}>
                        <div className="image-controls">
                            <button className={'arrow left-arrow'} onClick={handlePrev}>&lt; &lt; &lt;</button>
                            <div className="image-index">
                                {currentImageIndex + 1} / {images.length}
                            </div>
                            <button className={'arrow right-arrow'} onClick={handleNext}>&gt; &gt; &gt;</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Me;