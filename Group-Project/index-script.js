const animateTiming = {
    duration: 500,
    fill: "forwards",
    easing: "ease-in"
};

function transition(){
    const outer = document.getElementById("outer_logo");
    const inner = document.getElementById("inner_logo");
    const label = document.querySelector(".label");
    const button = document.querySelector(".enter");
    const page = document.querySelector(".transition_page");
    
    outer.animate({transform: 'scale(10)'},animateTiming);
    inner.animate({opacity: 0},animateTiming);
    label.animate({transform: 'translateX(-20px)', opacity: 0},animateTiming);
    button.animate({transform: 'translateX(20px)', opacity: 0},animateTiming);

    setTimeout(() => {page.animate({transform: 'translateY(-100%)'},{duration: 500,fill: "forwards",easing: "ease-out"})},1000);
    setTimeout(() => {window.location = 'nav.html';}, 2000);
}