console.log("Web first developed in 14/05/23. Last updated 24/08/24");

const collapse = document.getElementById("option");

collapse.addEventListener("click", action);
function action() {
    document.getElementById("nav").classList.toggle('active');
    collapse.classList.toggle('click');

}
