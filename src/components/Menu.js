import React from 'react';

import "./Menu.css";

export const Menu = ( { onClose: closeMenu, history } ) => {
    const [ isChoiceGiven, setIsChoiceGiven ] = React.useState( false );

    React.useEffect(() => {
        const handleEsc = ( event ) => {
            if ( event.key === "Escape" ) {
                document.removeEventListener( "keydown", handleEsc );
                setIsChoiceGiven( false );
            }
        }

        if (isChoiceGiven) {
            document.addEventListener( "keydown", handleEsc );
        }

        return () => { document.removeEventListener( "keydown", handleEsc ); };
    }, [isChoiceGiven]);

    React.useEffect( () => {
        const letters = document.querySelectorAll( "#crossword .letter" );

        const redirectTo = ( route ) => {
            closeMenu();
            history.push(`/${(route === "home") ? "" : route}`);
        };

        const handleLetterClick = ( clickEvent ) => {
            const [ firstRoute, secondRoute ] = Object.keys( clickEvent.target.dataset );

            if ( secondRoute ) {
                setIsChoiceGiven( true );

                const firstChoice = document.getElementById( "first-choice" );

                firstChoice.innerText = firstRoute;
                firstChoice.addEventListener( "mouseenter", () => { firstChoice.classList.add( firstRoute ); } );
                firstChoice.addEventListener( "mouseleave", () => { firstChoice.classList.remove( firstRoute ); } );
                firstChoice.addEventListener( "click", () => { redirectTo( firstRoute ); } );

                const secondChoice = document.getElementById( "second-choice" );

                secondChoice.innerText = secondRoute;
                secondChoice.addEventListener( "mouseenter", () => { secondChoice.classList.add( secondRoute ); } );
                secondChoice.addEventListener( "mouseleave", () => { secondChoice.classList.remove( secondRoute ); } );
                secondChoice.addEventListener( "click", () => { redirectTo( secondRoute ); } );

                document.getElementById( "choice-overlay-bg" )
                    .addEventListener( "click", () => { setIsChoiceGiven( false ); } );

                return;
            }

            redirectTo( firstRoute );
        };

        const handleMouseEnter = ( enterEvent ) => {
            const words = Object.keys( enterEvent.target.dataset );

            let lettersToNormalize = [];

            words.forEach( word => {
                const letters = document.querySelectorAll( `[data-${word}]` );

                letters.forEach( letter => {
                    letter.classList.add( word );
                } );

                lettersToNormalize = [ ...lettersToNormalize, ...letters ];
            } );

            enterEvent.target.addEventListener( "mouseleave", () => {
                lettersToNormalize.forEach( ltr => { ltr.className = "letter"; } );
            } );
        };

        letters.forEach( letter => {
            letter.addEventListener( "mouseenter", handleMouseEnter );
            letter.addEventListener( "click", handleLetterClick );
        } );

        return () => {
            letters.forEach( letter => {
                letter.removeEventListener( "mouseenter", handleMouseEnter );
                letter.removeEventListener( "click", handleLetterClick );
            } );
        };
    }, [closeMenu, history] );

    return (
        <div className="menu" id="menu">
            <div className="menu-close-btn" id="menu-close" onClick={closeMenu} >close</div>
            <div id="crossword" className="crossword">
                <div style={{ gridRow: 2, gridColumn: 5 }} className="letter" data-home>H</div>
                <div style={{ gridRow: 2, gridColumn: 6 }} className="letter" data-home data-contact>O</div>
                <div style={{ gridRow: 2, gridColumn: 7 }} className="letter" data-home>M</div>
                <div style={{ gridRow: 2, gridColumn: 8 }} className="letter" data-home>E</div>

                <div style={{ gridRow: 1, gridColumn: 6 }} className="letter" data-contact>C</div>
                <div style={{ gridRow: 3, gridColumn: 6 }} className="letter" data-contact>N</div>
                <div style={{ gridRow: 4, gridColumn: 6 }} className="letter" data-about data-contact>T</div>
                <div style={{ gridRow: 5, gridColumn: 6 }} className="letter" data-contact>A</div>
                <div style={{ gridRow: 6, gridColumn: 6 }} className="letter" data-projects data-contact>C</div>
                <div style={{ gridRow: 7, gridColumn: 6 }} className="letter" data-contact>T</div>

                <div style={{ gridRow: 4, gridColumn: 2 }} className="letter" data-about>A</div>
                <div style={{ gridRow: 4, gridColumn: 3 }} className="letter" data-about data-blog>B</div>
                <div style={{ gridRow: 4, gridColumn: 4 }} className="letter" data-about>O</div>
                <div style={{ gridRow: 4, gridColumn: 5 }} className="letter" data-about>U</div>

                <div style={{ gridRow: 5, gridColumn: 3 }} className="letter" data-blog>L</div>
                <div style={{ gridRow: 6, gridColumn: 3 }} className="letter" data-projects data-blog>O</div>
                <div style={{ gridRow: 7, gridColumn: 3 }} className="letter" data-blog>G</div>

                <div style={{ gridRow: 6, gridColumn: 1 }} className="letter" data-projects>P</div>
                <div style={{ gridRow: 6, gridColumn: 2 }} className="letter" data-projects>R</div>
                <div style={{ gridRow: 6, gridColumn: 4 }} className="letter" data-projects>J</div>
                <div style={{ gridRow: 6, gridColumn: 5 }} className="letter" data-projects>E</div>
                <div style={{ gridRow: 6, gridColumn: 7 }} className="letter" data-projects>T</div>
                <div style={{ gridRow: 6, gridColumn: 8 }} className="letter" data-projects data-resume>S</div>

                <div style={{ gridRow: 4, gridColumn: 8 }} className="letter" data-resume>R</div>
                <div style={{ gridRow: 5, gridColumn: 8 }} className="letter" data-resume>E</div>
                <div style={{ gridRow: 7, gridColumn: 8 }} className="letter" data-resume>U</div>
                <div style={{ gridRow: 8, gridColumn: 8 }} className="letter" data-resume>M</div>
                <div style={{ gridRow: 9, gridColumn: 8 }} className="letter" data-resume>E</div>
            </div>
            {isChoiceGiven && ( <>
                <div id="choice-overlay-bg" />
                <div className="choice-overlay">
                    <div className="choice" id="first-choice">First</div>
                    <div className="choice" id="second-choice">Second</div>
                </div>
            </> )}
        </div>
    );
}
