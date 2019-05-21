import React from "react";

import "./SocialLinks.css";

export const SocialLinks = () => (
    <div className="social-links" id="links" >
        <div id="twitter" className="link" >
            <a href="https://twitter.com/vka_me" target="_blank"
                rel="noopener noreferrer">
                Twitter
            </a>
        </div>
        <div id="github" className="link" >
            <a href="https://github.com/VamshiKrishnaAlladi" target="_blank"
                rel="noopener noreferrer">
                GitHub
            </a>
        </div>
        <div id="linkedin" className="link" >
            <a href="https://linkedin.com/in/vamshikrishnaalladi" target="_blank"
                rel="noopener noreferrer">
                LinkedIn
            </a>
        </div>
        <div id="instagram" className="link" >
            <a href="https://instagram.com/vamshikrishnaalladi" target="_blank"
                rel="noopener noreferrer">
                Instagram
            </a>
        </div>
    </div>
);
