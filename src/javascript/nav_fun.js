document.addEventListener("DOMContentLoaded",()=>{

    const ham = document.querySelector("nav .nav_container .mob_ham")
    const ham_els = document.querySelectorAll("nav .nav_container .mob_ham div")
    const mob_nav = document.querySelector("nav .nav_container .mob_nav_links")
    const mob_nav_links = document.querySelector("nav .nav_container .mob_nav_links ul")

    ham.addEventListener("click",()=>{
        ham_els.forEach(el=>{
            el.classList.toggle("open")
        })
        mob_nav.classList.toggle("open")
        mob_nav_links.classList.toggle("open")
    })


})