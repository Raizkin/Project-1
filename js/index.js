const sectionGet = document.querySelectorAll('.animation')



const sectionUpServer = new IntersectionObserver((section, observer) => {
    section.forEach(item => {
        if (item.isIntersecting) {
          console.log(item.target);
          item.target.style.transform = "scale(1)"
      }
       
   })
    
}, {
    rootMargin: '50px'
});


sectionGet.forEach(item => sectionUpServer.observe(item));