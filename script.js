const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", checkSections);

checkSections();

function checkSections() {
    const bottomScrollrigger = window.innerHeight / 2;

    sections.forEach(section => { 
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < bottomScrollrigger) {
            section.classList.add("show");
        }else {
          section.classList.remove("show");

        }

    });
}