import { SecTitle } from "./SecTitle";
import "../aboutUs.css"
import Button from "./Button";
import { useEffect } from "react";
import gsap from "gsap";
// import "../string.js"

export const AboutUs = () => {

    useEffect(() => {
        const string = document.querySelector("#string");
        const svg = string.querySelector("svg");
        const pathElement = svg.querySelector("path");

        const initialPath = "M 10 100 Q 500 100 990 100"; // Starting path
        let path = initialPath;

        const handleMouseMove = (dets) => {
            // Get bounding box of the SVG
            const bounds = string.getBoundingClientRect();

            // Calculate mouse position relative to the SVG
            const relativeX = dets.clientX - bounds.left;
            const relativeY = dets.clientY - bounds.top;

            // Clamp `y` to prevent extreme animations
            const clampedY = Math.max(50, Math.min(relativeY, 150));

            // Update the path dynamically
            path = `M 10 100 Q ${relativeX} ${clampedY} 990 100`;

            // Animate the SVG path
            gsap.to(pathElement, {
                duration: 0.3,
                ease: "power3.out",
                attr: { d: path },
            });
        };

        const handleMouseLeave = () => {
            // Revert to the initial path when the mouse leaves
            gsap.to(pathElement, {
                attr: { d: initialPath },
                duration: 1,
                ease: "elastic.out(1, 0.1)",
            });
        };

        // Add event listeners
        string.addEventListener("mousemove", handleMouseMove);
        string.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup event listeners on component unmount
        return () => {
            string.removeEventListener("mousemove", handleMouseMove);
            string.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <>
            <SecTitle bgTitle="RESUME" title="ABOUT" subTitle="ME" />

            <section className="info-sec">
                <div className="common-container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="personal-info">
                                <div className="heading">
                                    <h3 className="text-uppercase text-white fw-bold mb-3">
                                        Personal infos
                                    </h3>
                                </div>
                                <div className="info">
                                    <div className="row">
                                        <div className="col-12 d-sm-none">
                                            <div className="main-img">
                                                <img
                                                    src="img/name_here.jpg"
                                                    alt=""
                                                    className="img-fluid sm-device-img"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-6">
                                            <div className="info-wrap d-flex flex-column">
                                                <span className="f-name head-color">
                                                    First Name : <span className="name">Gaurav</span>
                                                </span>
                                                <span className="l-name head-color">
                                                    Last Name : <span className="name">Arora</span>
                                                </span>
                                                <span className="age head-color">
                                                    Age : <span className="age">2 Year</span>
                                                </span>
                                                <span className="nation head-color">
                                                    Nationality : <span className="nation">Indian</span>
                                                </span>
                                                <span className="freelancer head-color">
                                                    Freelancer : <span className="f-lancer">Availabe</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-6">
                                            <div className="info-wrap d-flex flex-column">
                                                <span className="f-name head-color">
                                                    Address : <span className="address">ANY</span>
                                                </span>
                                                <span className="l-name head-color">
                                                    Phone : <span className="contact">+216 456 555</span>
                                                </span>
                                                <span className="mail head-color d-none">
                                                    E-mail : <span className="mail">gaurav@gmail.com</span>
                                                </span>
                                                <span className="Skype head-color">
                                                    Skype : <span className="skype">gaurav1234@gmail.com</span>
                                                </span>
                                                <span className="lang head-color">
                                                    Languages : <span className="lang">Hindi, English</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button btntxt="DOWNLOAD CV" />
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="more-info">
                                <div className="row g-5">
                                    <div className="col-lg-6 col-12 col-sm-6">
                                        <div className="aboutExperiances">
                                            <div className="num">12+</div>
                                            <div className="content text-uppercase text-white">
                                                years of experience
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12 col-sm-6">
                                        <div className="aboutExperiances">
                                            <div className="num">97+</div>
                                            <div className="content text-uppercase text-white">
                                                completed projects
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12 col-sm-6">
                                        <div className="aboutExperiances">
                                            <div className="num">12+</div>
                                            <div className="content text-uppercase text-white">
                                                happy customers
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12 col-sm-6">
                                        <div className="aboutExperiances">
                                            <div className="num">12+</div>
                                            <div className="content text-uppercase text-white">
                                                awards won
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="string">
                <svg width="1000" height="200">
                    <path d="M 10 100 Q 500 100 990 100" stroke="#3c3c3c" fill="transparent" />
                </svg>
            </div>

            {/* EXPERIANCE & EDUCATION SECTION */}
            <section class="experiance-sec">
                <div class="container">
                    <div class="common-heading">
                        <h2 class="text-uppercase text-white text-center">EXPERIANCE & EDUCATION</h2>
                    </div>
                    <div class="edu-wrap">
                        <div class="row g-5">
                            <div class="col-12 col-lg-6">
                                <div class="exp-box text-white d-flex">
                                    <div class="exp-img me-3">
                                        <i class="fa-solid fa-suitcase"></i>
                                    </div>
                                    <div class="exp-content">
                                        <p class="year-info">2018 - present</p>
                                        <h4 class="work-domain text-uppercase">web developer - <span>envato</span>
                                        </h4>
                                        <p class="about-work">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                                            labore adipisicing elit,</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-lg-6">
                                <div class="exp-box text-white d-flex">
                                    <div class="exp-img me-3">
                                        <i class="fa-solid fa-graduation-cap"></i>
                                    </div>
                                    <div class="exp-content">
                                        <p class="year-info">2015</p>
                                        <h4 class="work-domain text-uppercase">Engineer Degree - <span>Oxford University</span>
                                        </h4>
                                        <p class="about-work">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                                            labore adipisicing elit,</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-lg-6">
                                <div class="exp-box text-white d-flex">
                                    <div class="exp-img me-3">
                                        <i class="fa-solid fa-suitcase"></i>
                                    </div>
                                    <div class="exp-content">
                                        <p class="year-info">2013 - 2018</p>
                                        <h4 class="work-domain text-uppercase">UI/UX Designer - <span>Themeforest</span>
                                        </h4>
                                        <p class="about-work">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                                            labore adipisicing elit,</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-lg-6">
                                <div class="exp-box text-white d-flex">
                                    <div class="exp-img me-3">
                                        <i class="fa-solid fa-graduation-cap"></i>
                                    </div>
                                    <div class="exp-content">
                                        <p class="year-info">2012</p>
                                        <h4 class="work-domain text-uppercase">Master Degree - <span>Kiev University</span>
                                        </h4>
                                        <p class="about-work">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                                            labore adipisicing elit,</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-lg-6">
                                <div class="exp-box text-white d-flex">
                                    <div class="exp-img me-3">
                                        <i class="fa-solid fa-suitcase"></i>
                                    </div>
                                    <div class="exp-content">
                                        <p class="year-info">2005 - 2013</p>
                                        <h4 class="work-domain text-uppercase">consultant - <span>Videohive</span>
                                        </h4>
                                        <p class="about-work">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                                            labore adipisicing elit,</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-lg-6">
                                <div class="exp-box text-white d-flex">
                                    <div class="exp-img me-3">
                                        <i class="fa-solid fa-graduation-cap"></i>
                                    </div>
                                    <div class="exp-content">
                                        <p class="year-info">2009 - present</p>
                                        <h4 class="work-domain text-uppercase">achelor Degree - <span>Tunis High School</span>
                                        </h4>
                                        <p class="about-work">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                                            labore adipisicing elit,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}