import React from "react";

import { Logo } from "./Logo";

import "./Banner.css";

export const Banner = ({width = "100%", height = "100%"}) => (
    <div className="banner" id="banner">
        <Logo className="banner-logo" width={width} height={height} />
    </div>
);
