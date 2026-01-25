console.log("Script is running .....");

/* save all input */ 
const sidebar = document.querySelector(".sidebar");
const hamberger = document.querySelector(".hamberger");
const ham = document.querySelector(".ham");
const cross = document.querySelector(".cross");

/* initial state */
cross.style.display = "none";
hamberger.addEventListener("click",()=>{
    sidebar.classList.toggle("sidebarGo");

    const isclosed = sidebar.classList.contains("sidebarGo");

    if(isclosed){
        ham.style.display = "inline";
        cross.style.display = "none";
    }else{
        ham.style.display = "none";
        setTimeout(() => {
            cross.style.display = "inline";
        }, 300);
    }
})