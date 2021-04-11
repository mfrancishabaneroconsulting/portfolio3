import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring, to } from "react-spring";
import useWindowDimensions from "../windowDimensions";
import SlideContent from "./SlideContent";
const timer = 3000;
export const SLIDE_CAREER_DESC = "Why I'm a great asset to your team";
const SlideContentCareer: React.FC<{}> = () => {
    const { width } = useWindowDimensions();
    return (
        <React.Fragment>
            <div className="contentSlideContainer">
                <SlideContent
                    // imgSrc={
                    //     "https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVza3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    // }
                    imgSrc={
                        "https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    }
                    title="Career Timeline"
                    desc={SLIDE_CAREER_DESC}
                />
            </div>
        </React.Fragment>
    );
};

export default SlideContentCareer;
