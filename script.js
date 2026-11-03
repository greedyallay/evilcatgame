addEventListener('load', (e) => {
    setTimeout(() => {
        window.scrollTo({top: 150, behavior: 'smooth'})
        document.documentElement.setAttribute("loaded", "true")
    }, 100);
    
})

addEventListener('scrollend', (e) => {
    if(window.scrollY < 150) {
        window.scrollTo({top: 150, behavior: 'smooth'})
    }
})