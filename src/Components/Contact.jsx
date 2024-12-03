import Button from "./Button";
import { SecTitle } from "./SecTitle";
import "../contact.css"
import { useState } from "react";
import styled from "styled-components";

export const Contact = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        subject: "",
        yourMess: "",
    });

    const handleInputValue = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    }

    const FormButton = styled.button`
        font-size: 1.5rem;
        padding:1rem 2rem;
        margin-top:2rem;
        border-radius:1rem;
        background-color:var(--main-color);
        border:none;
        color:white;

        &:hover{
            opacity:.7;
        }

    `;

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
                                <form className="form" onSubmit={handleFormSubmit}>
                                    <div className="inputs">
                                        <div className="fields">
                                            <input
                                                type="text"
                                                name="name"
                                                id="fname"
                                                className="input-field"
                                                placeholder="YOUR NAME"
                                                value={user.name}
                                                onChange={handleInputValue}
                                            />
                                        </div>
                                        <div className="fields">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="input-field"
                                                placeholder="YOUR EMAIL"
                                                value={user.email}
                                                onChange={handleInputValue}
                                            />
                                        </div>
                                        <div className="fields">
                                            <input
                                                type="text"
                                                name="subject"
                                                id="subj"
                                                className="input-field"
                                                placeholder="YOUR SUBJECT"
                                                value={user.subject}
                                                onChange={handleInputValue}
                                            />
                                        </div>
                                    </div>
                                    <div className="some-info">
                                        <textarea
                                            name="yourMess"
                                            id="info"
                                            cols="50"
                                            rows="7"
                                            placeholder="YOUR MESSAGE"
                                            value={user.yourMess}
                                            onChange={handleInputValue}
                                        ></textarea>
                                    </div>
                                    {/* <Button btntxt="SEND MESSAGE" /> */}
                                    {/* <button className="btn btn-dark">SEND MESSAGE</button> */}
                                    <FormButton className="">SEND MESSAGE</FormButton>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}