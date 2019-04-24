import React from "react";
// import { TweenMax } from "gsap";

import { Logo } from "./Logo";

import "./Banner.css";

export const Banner = () => {
    // const [logoShrinked, setLogoShrinked] = React.useState(false);
    // const [tweens, setTweens] = React.useState([]);

    // React.useEffect(() => {

    //     const handleWheel = (event) => {

    //         const tweensCopy = [...tweens];

    //         console.log("wheel event:", event);

    //         if ( !logoShrinked && event.deltaY > 0 ) {
    //             tweensCopy.push(TweenMax.to( "#v", 1.25, {
    //                 rotation: "360deg",
    //                 transformOrigin: "center center",
    //                 x: "+=100%",
    //             }));
    //             tweensCopy.push(TweenMax.to( "#k", 1.25, {
    //                 rotation: "270deg",
    //                 transformOrigin: "center center",
    //             }));
    //             tweensCopy.push(TweenMax.to( "#a", 1.25, {
    //                 rotation: "-180deg",
    //                 transformOrigin: "center center",
    //                 x: "-=100%",
    //             }));

    //             setTweens(tweensCopy);

    //             setLogoShrinked(shrinked => !shrinked);
    //         }

    //         if ( logoShrinked && event.deltaY < 0 ) {
    //             tweensCopy.forEach( function(tween) {
    //                 tween.reverse();
    //             } );
    //             setLogoShrinked(shrinked => !shrinked);
    //         }
    //     };

    //     document.addEventListener('wheel', handleWheel);

    //     return () => { document.removeEventListener("wheel", handleWheel); };
    // }, [logoShrinked])

    return (
        <div className="banner">
            <Logo className="banner-logo" width="100%" height="100%" />
        </div>
    );
};
