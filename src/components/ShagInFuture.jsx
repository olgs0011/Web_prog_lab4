import React from "react";
import shagInFutureData from "../mockData/shagInFutureData.js";

const ShagInFuture = () => {
  return (
    <div className="shag_in_future_header">
      <div className="header_text_box">
        <h1 dangerouslySetInnerHTML={{ __html: shagInFutureData.header}}></h1>
      </div>
      <div className="btn_box">
        <a href={shagInFutureData.requestLink}>
          <button className="btn_last">{shagInFutureData.requestButtonText}</button>
        </a>
      </div>

      <div className="gpt_box">
        <div className="logo">
          <img
            className="gpt_icon"
            src={shagInFutureData.blockGPT[0].imgSrc}
            alt={shagInFutureData.blockGPT[0].alt}
          />
          <p
            className="contaktiki"
            dangerouslySetInnerHTML={{ __html: shagInFutureData.blockGPT[0].text }}
          />
        </div>

        {shagInFutureData.blocks.map((block, index) => (
          <div key={index} className="shag_in_future_block">
            <p className="shtyki_ssilok">{block.title}</p>
            <p
              className="contaktiki"
              dangerouslySetInnerHTML={{ __html: block.text }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShagInFuture;