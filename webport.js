window.addEventListener('load', function () {
    document.querySelector('.loading-design').style.display = 'none';
});

var arrowup = document.querySelector("#arrowup");

arrowup.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
    });
})
var menuToggle = document.querySelector('.menu-toggle');
var navModal = document.querySelector(".nav-bar__modal");

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');

    if (menuToggle.classList.contains('open')) {
        navModal.style.display = "flex";
    } else {
        navModal.style.display = "none";
    }
});

var experienceCover = document.querySelector(".experience-cover");
experienceCover.addEventListener("click", function(){
    experienceCover.style.display = "none";
})
document.querySelector("#closeBtnExp").addEventListener("click",function(){
    experienceCover.style.display = "flex";
})

var headerLogo = document.querySelector('#logo-mj');
headerLogo.addEventListener("click",function(){
    location.reload(true);
})
// modal functions
var aboutNavModal = document.querySelector("#about-modal");
var educationNavModal = document.querySelector("#education-modal");
var thingsiknowNavModal = document.querySelector("#thingsiknow-modal");
var experienceNavModal = document.querySelector("#experience-modal");
var contactNavModal = document.querySelector("#contact-modal");

aboutNavModal.addEventListener('click', () => {
    document.querySelector("#about").scrollIntoView({ behavior: 'smooth' });
    navModal.style.display = "none";
    menuToggle.classList.remove('open'); 
});
educationNavModal.addEventListener('click', () => {
    document.querySelector("#education").scrollIntoView({ behavior: 'smooth' });
    navModal.style.display = "none";
    menuToggle.classList.remove('open'); 
});
thingsiknowNavModal.addEventListener('click', () => {
    document.querySelector("#thingsiknow").scrollIntoView({ behavior: 'smooth' });
    navModal.style.display = "none";
    menuToggle.classList.remove('open'); 
});
experienceNavModal.addEventListener('click', () => {
    document.querySelector("#experience").scrollIntoView({ behavior: 'smooth' });
    navModal.style.display = "none";
    menuToggle.classList.remove('open'); 
});
contactNavModal.addEventListener('click', () => {
    document.querySelector("#contact").scrollIntoView({ behavior: 'smooth' });
    navModal.style.display = "none";
    menuToggle.classList.remove('open'); 
});


var collegeDetails = document.querySelector(".bscpe");
var shsDetails = document.querySelector(".stem");
var jhsDetails = document.querySelector(".jhs");

collegeDetails.addEventListener("click",function(){
    if (document.querySelector(".college-details").style.display === "none"){
        document.querySelector(".college-details").style.display = "flex";
        document.querySelector(".bscpe > p:nth-child(2)").innerHTML = "-";
    }else{
        document.querySelector(".college-details").style.display = "none";
        document.querySelector(".bscpe > p:nth-child(2)").innerHTML = "+";
    }
})
shsDetails.addEventListener("click",function(){
    if (document.querySelector(".shs-details").style.display === "none"){
        document.querySelector(".shs-details").style.display = "flex";
        document.querySelector(".stem > p:nth-child(2)").innerHTML = "-";
    }else{
        document.querySelector(".shs-details").style.display = "none";
        document.querySelector(".stem> p:nth-child(2)").innerHTML = "+";
    }
})
jhsDetails.addEventListener("click",function(){
    if (document.querySelector(".jhs-details").style.display === "none"){
        document.querySelector(".jhs-details").style.display = "flex";
        document.querySelector(".jhs > p:nth-child(2)").innerHTML = "-";
    }else{
        document.querySelector(".jhs-details").style.display = "none";
        document.querySelector(".jhs > p:nth-child(2)").innerHTML = "+";
    }
})

// animation section

var page2DescriptionAnimation = document.querySelector(".wrapper-page2__left>p");

// page2
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Do something when element enters the viewport
            entry.target.classList.add('flyIn');
        } else {
            // Do something when element exits the viewport
            entry.target.classList.remove('flyIn');
        }
    });
}, { threshold: 0.5 });

var page2NameAnimation = document.querySelector(".wrapper-page2__left>h1");
observer.observe(page2NameAnimation);
observer.observe(page2DescriptionAnimation);

const page3observer = new IntersectionObserver((entries, page3observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Do something when element enters the viewport
            entry.target.classList.add('flyinTitle');
        } else {
            // Do something when element exits the viewport
            entry.target.classList.remove('flyinTitle');
        }
    });
}, { threshold: 0.5 });
// eto yung ioobserve na class
const pagetitle = document.querySelectorAll(".pagetitle");
pagetitle.forEach(pagetitle => {
    page3observer.observe(pagetitle);
});

// animation ng things I know

const page4leftObserver = new IntersectionObserver((entries, page4leftObserver) =>{
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            // Do something when element enters the viewport
            entry.target.classList.add('flyinLeft');
        } else {
            // Do something when element exits the viewport
            entry.target.classList.remove('flyinLeft');
        }
    })

})
var thingsiknowAnimation = document.querySelector(".page4-left");
page4leftObserver.observe(thingsiknowAnimation)

const page4rightObserver = new IntersectionObserver((entries, page4rightObserver) =>{
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            entry.target.classList.add('flyinRight');
        } else {
            entry.target.classList.remove('flyinRight');
        }
    })

})
var thingsiknowAnimation2 = document.querySelector(".page4-right");
page4rightObserver.observe(thingsiknowAnimation2);
page4rightObserver.observe(document.querySelector(".wrapper-page2right__box"));

// experience animation
var experienceAnimation = new IntersectionObserver((entries, experienceAnimation)=>{
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            entry.target.classList.add('opacityAnimation');
            console.log("yey nagana")
        }else{
            entry.target.classList.remove('opacityAnimation');
            console.log("aww wala na ulit")
        }
    })
},{threshold: 0.4})

var experienceElement = document.querySelector(".wrapper-experience");
experienceAnimation.observe(experienceElement);
