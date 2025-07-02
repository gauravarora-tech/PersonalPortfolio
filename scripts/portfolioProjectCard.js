const projects = [
    {
        imgSrc: '../img/project-1.jpg'
    },
    {
        imgSrc: '../img/project-2.jpg'
    },
    {
        imgSrc: '../img/project-3.jpg'
    },
    {
        imgSrc: '../img/project-4.jpg'
    },
    {
        imgSrc: '../img/project-5.jpg'
    },
    {
        imgSrc: '../img/project-6.jpg'
    },
    {
        imgSrc: '../img/project-7.jpg'
    },
    {
        imgSrc: '../img/project-8.jpg'
    },
    {
        imgSrc: '../img/project-9.jpg'
    },
]

const projectContainer = document.getElementById('project-container');
console.log(projectContainer);


projects.forEach(proj => {
    const card = `
    <div class="col-12 col-lg-4 col-md-6 col-sm-6">
        <div class="our-projects position-relative">
            <img src="${proj.imgSrc}" alt="" class="img-fluid w-100 h-100 rounded-3">
                <div class="content rounded-3">
                    <span class="text-uppercase text-white fw-medium">image project</span>
                </div>
        </div>
    </div>`

    projectContainer.insertAdjacentHTML('afterbegin', card);
})