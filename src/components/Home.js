import React from 'react';

import "./Home.css";

const traits = ["A Software Engineer.", "A Web Developer.", "A Geek.", "A Perfectionist."];
const themeColors = ["red", "green", "indigo", "yellow", "orange"];

export const Home = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        let intervalHandle;

        const trait = traits[(index % traits.length)].split("");
        const $trait = document.getElementById("trait");
        const $typeWriter = document.getElementById("type-writer");

        $trait.innerText = "";

        intervalHandle = setInterval(() => {
            if (trait.length) {
                $trait.innerText = $trait.innerText + trait.shift();
            }
            else {
                clearInterval(intervalHandle);
                setTimeout(() => {
                    setIndex(i => (i + 1));
                    $typeWriter.style.color = `var(--theme-${themeColors[(index % themeColors.length)]})`;
                }, 1500);
            }
        }, 200);

        return () => { clearInterval(intervalHandle); };
    }, [index]);

    return ( <>
        <div className="container">
            <div id="main" className="main-scene">
                <div className="content">
                    <div className="intro">
                        <div>Hey there, I am</div>
                        <div><span className="name">Vamshi Krishna Alladi</span>,</div>
                        <div id="type-writer" >
                            <span className="trait" id="trait"></span>
                            <span className="cursor">_</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> );
}
