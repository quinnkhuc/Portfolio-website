let all=document.getElementById("all");
let graphicDesignCategory=document.getElementById("graphic-design");
let uiCategory=document.getElementById("ui-ux");
let webDevCategory=document.getElementById("web-dev");

let graphicDesign=document.getElementsByClassName("graphic-design");
let ui=document.getElementsByClassName("ui-ux");
let webDev=document.getElementsByClassName("web-dev");

all.addEventListener("click", ()=>{
    for(i=0; i<graphicDesign.length; i++){
        graphicDesign[i].style.display="block";
    }
    for(i=0; i<ui.length; i++){
        ui[i].style.display="block";
    }
    for(i=0; i<webDev.length; i++){
        webDev[i].style.display="block";
    }
})

graphicDesignCategory.addEventListener("click", ()=>{
    for(i=0; i<graphicDesign.length; i++){
        graphicDesign[i].style.display="block";
    }
    for(i=0; i<ui.length; i++){
        ui[i].style.display="none";
    }
    for(i=0; i<webDev.length; i++){
        webDev[i].style.display="none";
    }
})

uiCategory.addEventListener("click", ()=>{
    for(i=0; i<graphicDesign.length; i++){
        graphicDesign[i].style.display="none";
    }
    for(i=0; i<ui.length; i++){
        ui[i].style.display="block";
    }
    for(i=0; i<webDev.length; i++){
        webDev[i].style.display="none";
    }
})

webDevCategory.addEventListener("click", ()=>{
    for(i=0; i<graphicDesign.length; i++){
        graphicDesign[i].style.display="none";
    }
    for(i=0; i<ui.length; i++){
        ui[i].style.display="none";
    }
    for(i=0; i<webDev.length; i++){
        webDev[i].style.display="block";
    }
})

