import React from 'react';
import './Resume.css';
import resumePdf from './Miller-Ben-Resume.pdf'; // Adjust the path as necessary

function Resume() {
    return (
        <div className="resume">
            <iframe
                src={`${resumePdf}#zoom=FitH`}
                className="resume-iframe"
                title="Resume"
            />
        </div>
    );
}

export default Resume;