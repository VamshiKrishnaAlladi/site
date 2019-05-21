import React from "react";

import { Menu } from "./Menu";

import "./MenuButton.css";

export const MenuButton = ( { className } ) => {
    const [ isMenuMinimized, setIsMenuMinimized ] = React.useState( true );

    const handleMenuClick = () => { if ( isMenuMinimized ) { setIsMenuMinimized( val => !val ); } };

    const handleMenuClose = () => { if ( !isMenuMinimized ) { setIsMenuMinimized( val => !val ); } };

    return ( <>
        <div className={className} onClick={handleMenuClick}>
            <svg viewBox="0 0 545 600">
                <g id="crossword" transform="translate(-278 -800)">
                    <rect id="border" transform="translate(278 800)" width="545" height="600" />
                    <g id="letters" transform="translate(-82 -55)">
                        <rect id="rect_1" width="50" height="50" transform="translate(690 910)" />

                        <rect id="rect_2" width="50" height="50" transform="translate(635 965)" />
                        <rect id="rect_3" width="50" height="50" transform="translate(690 965)" />
                        <rect id="rect_4" width="50" height="50" transform="translate(745 965)" />
                        <rect id="rect_5" width="50" height="50" transform="translate(800 965)" />

                        <rect id="rect_6" width="50" height="50" transform="translate(690 1020)" />

                        <rect id="rect_7" width="50" height="50" transform="translate(470 1075)" />
                        <rect id="rect_8" width="50" height="50" transform="translate(525 1075)" />
                        <rect id="rect_9" width="50" height="50" transform="translate(580 1075)" />
                        <rect id="rect_10" width="50" height="50" transform="translate(635 1075)" />
                        <rect id="rect_11" width="50" height="50" transform="translate(690 1075)" />
                        <rect id="rect_12" width="50" height="50" transform="translate(800 1075)" />

                        <rect id="rect_13" width="50" height="50" transform="translate(525 1130)" />
                        <rect id="rect_14" width="50" height="50" transform="translate(690 1130)" />
                        <rect id="rect_15" width="50" height="50" transform="translate(800 1130)" />

                        <rect id="rect_16" width="50" height="50" transform="translate(415 1185)" />
                        <rect id="rect_17" width="50" height="50" transform="translate(470 1185)" />
                        <rect id="rect_18" width="50" height="50" transform="translate(525 1185)" />
                        <rect id="rect_19" width="50" height="50" transform="translate(580 1185)" />
                        <rect id="rect_20" width="50" height="50" transform="translate(635 1185)" />
                        <rect id="rect_21" width="50" height="50" transform="translate(690 1185)" />
                        <rect id="rect_22" width="50" height="50" transform="translate(745 1185)" />
                        <rect id="rect_23" width="50" height="50" transform="translate(800 1185)" />

                        <rect id="rect_24" width="50" height="50" transform="translate(525 1240)" />
                        <rect id="rect_25" width="50" height="50" transform="translate(690 1240)" />
                        <rect id="rect_26" width="50" height="50" transform="translate(800 1240)" />
                        <rect id="rect_27" width="50" height="50" transform="translate(800 1295)" />
                        <rect id="rect_28" width="50" height="50" transform="translate(800 1350)" />
                    </g>
                </g>
            </svg>
        </div>
        {!isMenuMinimized && <Menu onClose={handleMenuClose} />}
    </> );
};
