import React from 'react';
import { bannerData } from '../mockData/bannerData.js';

const Banner = () => {
    return (
        <div className="banner_content">
            <div className="begin_left">
                <h2 className="banner_title">{bannerData.heading}</h2>
                <p className="banner_osnovn_text" dangerouslySetInnerHTML={{ __html: bannerData.subheading }}></p>
            </div>
            <div className="btn_cont">
                <button className="button_banner">{bannerData.buttonText}</button>
            </div>
        </div>
    );
};

export default Banner;