const skills = [
    {
        skillname: 'HTML',
        iconCode: 'fab fa-html5'
    },
    {
        skillname: 'CSS',
        iconCode: 'fa-brands fa-css3'
    },
    {
        skillname: 'JavaScript',
        iconCode: 'fab fa-js'
    },
    {
        skillname: 'ReactJS',
        iconCode: 'fab fa-react'
    },
    {
        skillname: 'BootStrap',
        iconCode: 'fab fa-bootstrap'
    },
    {
        skillname: 'Tailwind',
        iconCode: 'fas fa-wind'
    },
]

const skillsContainer = document.querySelector('#skills-container')
console.log(skillsContainer);


skills.forEach((skill) => {

    const card = `
<div class="col-lg-4 d-flex justify-content-center align-items-center">
    <div class="skill-ring">
        <div class="inner-circle">
             <i class="${skill.iconCode}" title="${skill.skillname}"></i>
        </div>
   </div>
</div>
`
    skillsContainer.insertAdjacentHTML('afterbegin', card)
})

