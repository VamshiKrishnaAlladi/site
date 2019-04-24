import React from "react";
import { TweenMax, TweenLite } from "gsap";

import "./SocialLinks.css";

import follow from "../assets/follow.svg";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";

export const SocialLinks = () => {
    TweenMax.globalTimeScale(0.2);
    const [ linksShown, setLinksShown ] = React.useState( false );

    React.useEffect(() => {
        document.getElementById("links").addEventListener('mouseover', handleMouseOver);
        // document.getElementById("links").addEventListener('mouseout', handleMouseOut);

        return () => {
            document.getElementById("links").removeEventListener("mouseover", handleMouseOver);
            // document.getElementById("links").removeEventListener("mouseout", handleMouseOut);
        };
    }, [linksShown]);

    const handleMouseOver = () => {
        console.log("in mouse over");

        if ( !linksShown ) {
            console.log("in mouse over - link is not shown");
            TweenLite.to( ".link", 0.3, { display: "block", autoAlpha: 1 } );
            setLinksShown( shown => !shown );
        }
    };

    // const handleMouseOut = () => {
    //     console.log("in mouse out");

    //     if ( linksShown ) {
    //         console.log("in mouse out - link is shown");
    //         TweenLite.to( ".link", 0.3, { display: "none", autoAlpha: 0 } );
    //         setLinksShown( shown => !shown );
    //     }
    // };

    return (
        <div className="social-links" id="links" >
            <div className="link" >
                <a href="https://github.com/VamshiKrishnaAlladi" target="_blank"
                    rel="noopener noreferrer">
                    <img src={github} alt="Git-Hub Logo" />
                </a>
            </div>
            <div className="link" >
                <a href="https://twitter.com/vka_me" target="_blank"
                    rel="noopener noreferrer">
                    <img src={twitter} alt="Twitter Logo" />
                </a>
            </div>
            <div className="link" >
                <a href="https://linkedin.com/in/vamshikrishnaalladi" target="_blank"
                    rel="noopener noreferrer">
                    <img src={linkedin} alt="Linked-In Logo" />
                </a>
            </div>
            <div className="link" >
                <a href="https://instagram.com/vamshikrishnaalladi" target="_blank"
                    rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram Logo" />
                </a>
            </div>
            <div className="follow">
                <img src={follow} alt="Follow me on" />
            </div>
        </div>
    );
};
