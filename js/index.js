const navToggler=document.querySelector(".nav-toggler");
navToggler.addEventListener("click",()=>{
    hideSection();
    toggleNavbar();
})
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function hideHeader(){
    document.querySelector(".nav").classList.add("hidden")
    document.querySelector(".allSection").classList.remove("hidden")

}
function toggleNavbar(){
    document.querySelector(".allSection").classList.add("hidden")
    document.querySelector(".nav").classList.remove("hidden")
    document.querySelector(".header").classList.add("active");
}
////////////////
window.addEventListener("load",()=>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");

    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(()=>{
        document.querySelector(".page-loader").style.display="none";
    },600)
})
const tabsConatiner=document.querySelector(".about-tabs"),
aboutSection=document.querySelector(".about-section");
tabsConatiner.addEventListener("click",(e)=>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsConatiner.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target=e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    } 
})

//////porfolio

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("view-project-btn")){
        togglePopUp();
        
        portfolioDetails(e.target.parentElement);

    }
})
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("pp-inner")){
        togglePopUp();
    }
})
function togglePopUp(){
    document.querySelector(".porfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
function portfolioDetails(portfolioItem){
    console.log(portfolioItem);
document.querySelector(".pp-thumbnail img").src=
portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

document.querySelector(".pp-header h3").innerHTML=
portfolioItem.querySelector(".porfolio-item-title").innerHTML;

document.querySelector(".pp-body").innerHTML=
portfolioItem.querySelector(".portfolio-item-details").innerHTML;


}
document.querySelector(".pp-close").addEventListener("click",togglePopUp);

