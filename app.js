const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control'); 
const allSections = document.querySelector('.main-content'); 

function PageTransitions() {
     sectBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
           
            document.querySelector(".active-btn")?.classList.remove("active-btn");
            this.classList.add("active-btn");

           
            const id = this.dataset.id;
            if (id) {
                sections.forEach((section) => {
                    section.classList.remove("active");
                });
                document.getElementById(id).classList.add("active");
            }
        });
    });
}

PageTransitions();
