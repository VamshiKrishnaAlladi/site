import React from 'react';

import { Banner } from "./Banner";

import "./Home.css";

const traits = ["A Software Engineer.", "A Web Developer.", "A Geek.", "A Perfectionist."];
const themeColors = ["red", "green", "indigo", "yellow", "orange"];

export const Home = () => {
    React.useEffect( () => {
        const $main = document.getElementById( "main" );
        const $logoScene = document.getElementById( "logo-scene" );
        const $banner = document.getElementById( "banner" );

        const handleBannerClick = () => { $main.scrollIntoView( { behavior: "smooth" } ); };
        const handleMainClick = () => { $logoScene.scrollIntoView( { behavior: "smooth" } ); };

        $banner.addEventListener( "click", handleBannerClick );
        $main.addEventListener( "click", handleMainClick );

        return () => {
            $banner.removeEventListener( "click", handleBannerClick );
            $main.removeEventListener( "click", handleBannerClick );
        }
    }, [] );

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        console.log(index);

        let intervalHandle;

        const trait = traits[(index % traits.length)].split("");
        const $trait = document.getElementById("trait");
        const $typer = document.getElementById("typer");

        $trait.innerText = "";

        intervalHandle = setInterval(() => {
            if (trait.length) {
                $trait.innerText = $trait.innerText + trait.shift();
            }
            else {
                clearInterval(intervalHandle);
                setTimeout(() => {
                    setIndex(i => (i + 1));
                    $typer.style.color = `var(--theme-${themeColors[(index % themeColors.length)]})`;
                }, 1500);
            }
        }, 200);

        return () => { clearInterval(intervalHandle); };
    }, [index]);

    return ( <>
        <div className="container">
            <div id="logo-scene" className="logo-scene">
                <Banner />
            </div>
            <div id="main" className="main-scene">
                <div className="content">
                    <div className="intro">
                        <div>Hey there, I am</div>
                        <div><span className="name">Vamshi Krishna Alladi</span>,</div>
                        <div id="typer" >
                            <span className="trait" id="trait"></span>
                            <span className="cursor">_</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> );
}
