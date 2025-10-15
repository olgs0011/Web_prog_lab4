import React from 'react';
import { jenshinaData } from '../mockData/jenshinaData.js';

const Jenshina = () => {
    return (
        <div className="jenshina">
            <div className="jenshina__left">
                <img src={jenshinaData.imageSrc} alt="jenshina Image" />
            </div>
            <div className="jenshina__right">
                <p className="ranniy_dostyp">{jenshinaData.ranniyDostyp}</p>
                <h2 className="demo_title">{jenshinaData.demoTitleText}</h2>
                <p className="bed_text">{jenshinaData.bedText}</p>
                <a href={jenshinaData.zaprosRanniyDostypLink} className="zapros_ranniy_dostyp">
                    {jenshinaData.zaprosRanniyDostypText}
                </a>
            </div>
        </div>
    );
};

export default Jenshina;