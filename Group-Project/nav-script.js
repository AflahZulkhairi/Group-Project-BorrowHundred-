var open = 0;

const animateTiming = {
    duration: 250,
    fill: "forwards",
    easing: "ease-in-out"
};

const animateTiming_2 = {
    duration: 150,
    fill: "forwards",
    easing: "ease-in-out"
};

function hoverService(){
    const icon = document.querySelector(".service-button .icon-box");
    const text = document.querySelector(".service-button .text-box");

    text.animate({transform: 'translateX(-100px)'},animateTiming);
    icon.animate({transform: 'translateX(-200px)'},animateTiming);
}

function hoverAbout(){
    const icon = document.querySelector(".about-button .icon-box");
    const text = document.querySelector(".about-button .text-box");

    text.animate({transform: 'translateX(-100px)'},animateTiming);
    icon.animate({transform: 'translateX(-230px)'},animateTiming);
}

function hoverContact(){
    const icon = document.querySelector(".contact-button .icon-box");
    const text = document.querySelector(".contact-button .text-box");

    text.animate({transform: 'translateX(-100px)'},animateTiming);
    icon.animate({transform: 'translateX(-200px)'},animateTiming);
}

function hoverOut(){
    const icon1 = document.querySelector(".service-button .icon-box");
    const text1 = document.querySelector(".service-button .text-box");
    const icon2 = document.querySelector(".about-button .icon-box");
    const text2 = document.querySelector(".about-button .text-box");
    const icon3 = document.querySelector(".contact-button .icon-box");
    const text3 = document.querySelector(".contact-button .text-box");
    const left1 = document.querySelector(".service-left a");
    const right1 = document.querySelector(".service-right a");
    const left2 = document.querySelector(".about-left a");
    const right2 = document.querySelector(".about-right a");

    text1.animate({transform: 'translateX(0)',opacity:1},animateTiming);
    icon1.animate({transform: 'translateX(0)',opacity:1},animateTiming);
    text2.animate({transform: 'translateX(0)',opacity:1},animateTiming);
    icon2.animate({transform: 'translateX(0)',opacity:1},animateTiming);
    text3.animate({transform: 'translateX(0)'},animateTiming);
    icon3.animate({transform: 'translateX(0)'},animateTiming);

    if(open == 1){
        left1.animate({transform: 'translateX(300px)'},animateTiming);
        right1.animate({transform: 'translateX(-300px)'},animateTiming);
        left2.animate({transform: 'translateX(300px)'},animateTiming);
        right2.animate({transform: 'translateX(-300px)'},animateTiming);
    }

}

function showOptService(){
    const icon1 = document.querySelector(".service-button .icon-box");
    const text1 = document.querySelector(".service-button .text-box");
    const left = document.querySelector(".service-left a");
    const right = document.querySelector(".service-right a");
    open = 1;

    icon1.animate({opacity:0},animateTiming_2);
    text1.animate({opacity:0},animateTiming_2);
    left.animate({transform: 'translateX(0)'},animateTiming);
    right.animate({transform: 'translateX(0)'},animateTiming);

}

function showOptAbout(){
    const icon1 = document.querySelector(".about-button .icon-box");
    const text1 = document.querySelector(".about-button .text-box");
    const left = document.querySelector(".about-left a");
    const right = document.querySelector(".about-right a");
    open = 1;

    icon1.animate({opacity:0},animateTiming_2);
    text1.animate({opacity:0},animateTiming_2);
    left.animate({transform: 'translateX(0)'},animateTiming);
    right.animate({transform: 'translateX(0)'},animateTiming);

}

function contact_page(){window.location = "index.html"}