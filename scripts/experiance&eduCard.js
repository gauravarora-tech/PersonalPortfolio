const cardData = [
    {
        icon: "fa-solid fa-suitcase",
        year: "2018 - present",
        workDomain: "web developer",
        workPlace: "envato",
        aboutWork: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit"
    },
    {
        icon: "fa-solid fa-laptop-code",
        year: "2016 - 2018",
        workDomain: "frontend developer",
        workPlace: "freelancer",
        aboutWork: "Focused on building responsive web interfaces and improving UI/UX across multiple platforms."
    },
    {
        icon: "fa-solid fa-database",
        year: "2014 - 2016",
        workDomain: "backend developer",
        workPlace: "TechCorp",
        aboutWork: "Developed robust APIs and maintained databases to support enterprise-level applications."
    },
    {
        icon: "fa-solid fa-network-wired",
        year: "2012 - 2014",
        workDomain: "network engineer",
        workPlace: "NetSolutions",
        aboutWork: "Managed network infrastructure, ensured system security, and optimized data flow efficiency."
    }
];


const cardContainer = document.querySelector("#card-container");

cardData.forEach(card => {
    const cardElement = `
    <div class="col-12 col-lg-6" >
    <div class="exp-box text-white d-flex">
                            <div class="exp-img me-3">
                                <i class="${card.icon}"></i>
                            </div>
                            <div class="exp-content">
                                <p class="year-info">${card.year}</p>
                                <h4 class="work-domain text-uppercase">${card.workDomain} - <span>${card.workPlace}</span>
                                </h4>
                                <p class="about-work">${card.aboutWork}</p>
                            </div>
                        </div>
    </div>`
    cardContainer.insertAdjacentHTML("beforeend", cardElement);
});