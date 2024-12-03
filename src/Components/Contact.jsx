import Button from "./Button";
import { SecTitle } from "./SecTitle";
import "../contact.css"

export const Contact = () => {
    return (
        <>
            <SecTitle bgTitle="CONTACT" title="GET IN" subTitle="TOUCH" />


            <section className="form-section">
                <div className="container common-container">
                    <div className="form-sec-wrap text-white">
                        <div className="row">
                            {/* Contact Information Section */}
                            <div className="col-12 col-lg-4 col-md-12">
                                <div className="form-info">
                                    <div className="heading">
                                        <h3 className="text-uppercase fw-bold">don't be shy !</h3>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Feel free to get in touch with me. I am always open to discussing new projects,
                                            creative ideas or opportunities to be part of your visions.
                                        </p>
                                    </div>
                                    <div className="mail-us">
                                        <span>
                                            <i className="fa-solid fa-envelope-open"></i>
                                        </span>
                                        <div className="info">
                                            <div className="text-uppercase fs-4">mail me</div>
                                            <div>
                                                <a href="mailto:gaurav@gmail.com" className="fw-bold text-white">gaurav@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mail-us">
                                        <span>
                                            <i className="fa-solid fa-phone"></i>
                                        </span>
                                        <div className="info">
                                            <div className="text-uppercase fs-4">call me</div>
                                            <div>
                                                <a href="tel:+261525141" className="fw-bold text-white">+261 525 141</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="social-icons">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-dribbble"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Form Section */}
                            <div className="col-12 col-lg-8 col-md-12">
                                <div className="form">
                                    <div className="inputs">
                                        <div className="fields">
                                            <input
                                                type="text"
                                                name="text"
                                                id="fname"
                                                className="input-field"
                                                placeholder="YOUR NAME"
                                            />
                                        </div>
                                        <div className="fields">
                                            <input
                                                type="email"
                                                name=""
                                                id="email"
                                                className="input-field"
                                                placeholder="YOUR EMAIL"
                                            />
                                        </div>
                                        <div className="fields">
                                            <input
                                                type="text"
                                                name=""
                                                id="subj"
                                                className="input-field"
                                                placeholder="YOUR SUBJECT"
                                            />
                                        </div>
                                    </div>
                                    <div className="some-info">
                                        <textarea
                                            name=""
                                            id="info"
                                            cols="50"
                                            rows="7"
                                            placeholder="YOUR MESSAGE"
                                        ></textarea>
                                    </div>
                                    <Button btntxt = "SEND MESSAGE"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}