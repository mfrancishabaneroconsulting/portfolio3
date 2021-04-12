import { render } from "react-dom";
import React, { useState, useEffect, useRef } from "react";
import DetailBanner from "./DetailBanner";
import DetailBack from "./DetailBack";
import me1 from "../img/me1.jpg";
import me2 from "../img/me2.jpg";
import { SLIDE_ABOUT_ME_DESC } from "./SlideLanding";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
interface DetailAboutMeProps {
    // changeHeaderBackIconToBlack: any;
    updateHeaderBackIconToBlack(setColorToBlack: boolean): void;
}
const DetailAboutMe: React.FC<DetailAboutMeProps> = (props) => {
    useEffect(() => {
        document.body.style.overflowY = "visible";
    }, []);

    return (
        <div className="detailAboutMeContainer">
            <DetailBanner
                title="About Me"
                imgSrc={me1}
                desc={SLIDE_ABOUT_ME_DESC}
            />
            {/* <span ref={ref}></span> */}
            <div className="aboutMeWrap">
                <div className="myStoryWrap">
                    <div className="myStoryInnerWrap">
                        <div className="myStoryBlock"></div>
                        <h1>my Story</h1>
                    </div>
                </div>
                <div className="aboutMeImageAndDescWrap">
                    <h1>Matthew Francis</h1>
                    <p>
                        Born and raised Jakarta, Indonesia in 2000. Moved to
                        Ontario, Canada at 2011. Aspiring to be a web developer.
                    </p>
                    <img src={me2} alt="" />
                </div>
            </div>
            <DetailBack />
        </div>
    );
};

const mapStateToProps = (state: StoreState) => {
    return {
        // changeHeaderBackIconToBlack: state.changeHeaderBackIconToBlack,
    };
};

export default connect(mapStateToProps, {})(DetailAboutMe);
