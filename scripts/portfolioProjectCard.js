const projects = [
    {
        imgSrc: '../img/gymproj.jpg',
        projectSrc: 'https://github.com/gauravarora-tech/fitnessplacegym',
        projectName: 'Fitness Place Gym',
    },
    {
        imgSrc: '../img/portfolioproj.jpg',
        projectSrc: 'https://github.com/gauravarora-tech/PersonalPortfolio',
        projectName: 'Personal Portfolio',
    },
    {
        imgSrc: '../img/project-3.jpg',
        projectSrc: 'https://github.com/gauravarora-tech/fitnessplacegym',
        projectName: 'Fitness Place Gym',
    },

]

const projectContainer = document.getElementById('project-container');
console.log(projectContainer);


projects.forEach(proj => {
    const card = `
    <div class="col-12 col-lg-4 col-md-6 col-sm-6">
        <div class="our-projects position-relative">
            <img src="${proj.imgSrc}" alt="" class="img-fluid w-100 h-100 rounded-3">
                <div class="content rounded-3 d-flex flex-column justify-content-center align-items-center">
                    <span class="text-uppercase text-white fw-medium">${proj.projectName}   </span>
                    <a href="${proj.projectSrc}" target="_blank" class="btn btn-dark text-uppercase mt-3">View Project</a>
                </div>
        </div>
    </div>`

    projectContainer.insertAdjacentHTML('afterbegin', card);
})