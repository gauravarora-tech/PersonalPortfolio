import "../sectitle.css"

export const SecTitle = ({ bgTitle, title, subTitle }) => {
    return (
        <section className="sec-title">
            <div className="title text-center">
                <p className="bg-title">{bgTitle}</p>
                <span className="text-white main-head">
                    {title} <span className="title-color">{subTitle}</span>
                </span>
                <span className="open-phone-btn">
                    <ion-icon name="menu-outline" className="open-btn nav-btn d-lg-none"></ion-icon>
                    {/* <ion-icon name="close-outline" className="close-btn nav-btn"></ion-icon> */}
                </span>
            </div>
        </section>
    );
}