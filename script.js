/* ── THEME TOGGLE with localStorage ── */
const themeToggle = document.getElementById('theme-toggle');

// on load - apply saved preference 
const saved = localStorage.getItem("theme");
if(saved === 'light'){
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙"; // show moon to switch dark 
}
else{
    themeToggle.textContent = "🌙"; // show sun to switch to light mode
}

// on click - toggle 

themeToggle.addEventListener("click",()=>{
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        localStorage.setItem("theme","light");
        themeToggle.textContent = "🌙"; // now in day mode , show moon to switch in night mode
    }else{
        localStorage.setItem("theme","dark");
        themeToggle.textContent = "☀️"; // now in dark mode , show sun to switch in day mode
    }
});