import Button from './Button';
import '../home.css'
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";


export const HomePage = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto"; // Reset for other pages
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [location]);
    return (
        <>
            {/* body-bg-box strt */}
            <div class="bg-box d-lg-block d-sm-none"></div>
            {/* body-bg-box end */}

            <section className='main-section'>
                <div className="container">
                    <div class="row">
                        <div class="main-sec-wrap d-flex align-items-center">
                            <div class="col-lg-5">
                                <div class="author-img d-lg-block d-none d-sm-block">
                                    <img src="my-img.jpg" alt="author" class="img-fluid " />
                                </div>
                            </div>
                            <div class="col-lg-7 col-12">
                                <div class="main-sec-content text-sm-center text-lg-start">
                                    <h1 class="text-white"><span id="main-color">I'm Gaurav Arora.</span><br /> <span id="dynamic-content"></span>
                                    </h1>
                                    <div class="description">
                                        <p class="text-white">I'm a Tunisian based web designer & front-end developer focused on
                                            crafting clean & user‑friendly experiences, I am passionate about building excellent
                                            software that improves the lives of those around me.</p>
                                    </div>
                                    <Button btntxt="More about me" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}