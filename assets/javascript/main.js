console.log("JS link successful!");

let navHome = document.getElementById("nav-home")
let navSkills = document.getElementById("nav-skills")
let navProjects = document.getElementById("nav-projects")
let navContact = document.getElementById("nav-contact")

let scrollHome = document.getElementById("intro-div")
let scrollSkills = document.getElementById("skills-title")
let scrollProjects = document.getElementById("projects-title")
let scrollContact = document.getElementById("contact-title")

navHome.addEventListener("click", function(event) {
    event.preventDefault()
    window.scrollTo(0,scrollHome.offsetTop - 80)
})
navSkills.addEventListener("click", function(event) {
    event.preventDefault()
    window.scrollTo(0,scrollSkills.offsetTop - 80)
})
navProjects.addEventListener("click", function(event) {
    event.preventDefault()
    window.scrollTo(0,scrollProjects.offsetTop - 80)
})
navContact.addEventListener("click", function(event) {
    event.preventDefault()
    window.scrollTo(0,scrollContact.offsetTop - 80)
})