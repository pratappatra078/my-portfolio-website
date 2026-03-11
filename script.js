const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((e,i)=>{
        if(e.isIntersecting){
            e.target.style.transitionDelay = `${i*0.07}s`;
            e.target.classList.add('visible');
        }
    });
},{threshold:0.12});
reveals.forEach(el=>observer.observe(el));