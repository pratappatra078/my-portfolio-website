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

/* blink effect*/
const texts = ["Full Stack Developer","CS Engineer","Tech Enhusiast"];
let count = 0;
let index =0;
let currText = "";
let letter ="";
(function type(){
    if(count === texts.length){
        count =0;
    }
    currText = texts[count];
    letter = currText.slice(0,++index);
    document.querySelector(".typewriter").textContent = letter;
    if(letter.length === currText.length){
        count++;
        index =0;
        setTimeout(type,2000); // wait 2 sec
    }
    else{
        setTimeout(type,100); // typing speed
    }
})();