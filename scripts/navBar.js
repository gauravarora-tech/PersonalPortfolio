let navHtml = `<nav class="nav-bar vertical-nav">
                    <!-- <div class="open-phone-btn">
                                <ion-icon name="close-outline" class="close-btn nav-btn"></ion-icon>
                            </div> -->
                    <ul class="main-menu">
                        <li><a href="index.html" class="nav-items active"><span
                                    class="items order-lg-1 order-2">HOME</span><span class="icon order-lg-2 order-1"><i
                                        class="fa-solid fa-house-chimney"></i></span></a>
                        </li>
                        <li><a href="about.html" class="nav-items"><span
                                    class="items order-lg-1 order-2">ABOUT</span><span
                                    class="icon order-lg-2 order-1"><i class="fa-solid fa-user"></i></span></a>
                        </li>
                        <li><a href="portfolio.html" class="nav-items"><span
                                    class="items order-lg-1 order-2">PORTFOLIO</span><span
                                    class="icon order-lg-2 order-1"><i class="fa-solid fa-suitcase "></i></span></a>
                        </li>
                        <li><a href="contact.html" class="nav-items"><span
                                    class="items order-lg-1 order-2">CONTACT</span><span
                                    class="icon order-lg-2 order-1"><i
                                        class="fa-solid fa-envelope-open "></i></span></a>
                        </li>
                    </ul>
                </nav>`

const navbarSection = document.querySelector('.navbarSection');
navbarSection.insertAdjacentHTML('afterbegin', navHtml);
