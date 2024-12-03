import "../button.css"

const Button = ({ btntxt }) => {

    return (
        <div class="main-sec-btn">
            <a href="#" class="text-white sec-btn btn btn-outline-primary"><span
                class="btn-txt">{btntxt}</span><span class="arrow"><i
                    class="fa-solid fa-arrow-right"></i></span></a>
        </div>
    );
}

export default Button;
