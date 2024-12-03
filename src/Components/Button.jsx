import "../button.css"

const Button = ({ btntxt }) => {

    return (
        <div className="main-sec-btn">
            <a href="#" class="text-white sec-btn btn btn-outline-primary"><span
                className="btn-txt">{btntxt}</span><span className="arrow"><i
                    className="fa-solid fa-arrow-right"></i></span></a>
        </div>
    );
}

export default Button;
