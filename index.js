const contactMeBtn = document.querySelector(".contact-me");
const bodydiv = document.querySelector("body")
const contactMeDiv = document.querySelector(".section-contact-me")
contactMeBtn.addEventListener("click",function(){
    // alert('contact me open');
    contactMeDiv.classList.remove('close');
    contactMeDiv.classList.add("open");

    

});

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click",function(){
    // alert('close button');
    contactMeDiv.classList.remove("open");
    contactMeDiv.classList.add("close");

});




