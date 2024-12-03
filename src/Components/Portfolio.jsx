import { SecTitle } from "./SecTitle";
import "../portfolio.css";

export const Portfolio = () => {
   
    //     // Register ScrollTrigger plugin
    //     gsap.registerPlugin(ScrollTrigger);

    //     // Apply GSAP animation
    //     gsap.from(".video video", {
    //         scale: 0.5,
    //         scrollTrigger: {
    //             trigger: ".video video",
    //             scroller: "body",
    //             markers: false,
    //             start: "top 80%",
    //             end: "top 10%",
    //             scrub: 2,
    //         },
    //     });
    // }, []);

    return (
        <>
            <SecTitle bgTitle="WORKS" title="MY" subTitle="PORTFOLIO" />

            {/* <div id="page1"></div> */}

            <div className="video container">
                <video src="video-start.mp4" autoPlay loop></video>
            </div>
        </>
    );
};
