import { render } from "react-dom";
import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import history from "../browserHistory";
interface DetailBannerProps {
    title: string;
    imgSrc: any;
}
const DetailBanner: React.FC<DetailBannerProps> = (props) => {
    return (
        <div className="detailBanner">
            <img src={props.imgSrc} alt="" />

            <BiArrowBack
                onClick={() => history.goBack()}
                className="backButton"
            />

            <h1 className="detailTitle">{props.title}</h1>
            <div className="scrollDownWrap">
                <h1>Scroll Down</h1>
                <div className="scrollDownBlock"></div>
            </div>
        </div>
    );
};

export default DetailBanner;