document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");
});

function animateProgressBars() {
    const skillsSection = document.querySelector("#habilidades");
    const progressBars = document.querySelectorAll(".progress-bar");
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
    
    if (sectionPos < screenPos) {
        progressBars.forEach(bar => {
            // Establecemos la transición de la barra
            bar.style.transition = "width 5s ease-in-out";
            // Asegúrate de que el valor de `data-width` esté entre 0 y 100 (porcentaje)
            const targetWidth = bar.getAttribute("data-width");
            bar.style.width = targetWidth + "%";
        });
        window.removeEventListener("scroll", animateProgressBars);
    }
}

window.addEventListener("scroll", animateProgressBars);

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("#aboutme h6").forEach(header => {
        header.addEventListener("click", function() {
            let list = this.nextElementSibling;
            list.classList.toggle("show");
        });
    });
});
