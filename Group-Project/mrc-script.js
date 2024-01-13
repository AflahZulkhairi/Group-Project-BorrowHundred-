var n = 0;
var m = 0;
const animateTiming = {
    duration: 400,
    fill: "forwards",
    easing: "ease-in-out"
};

function revealName(index){
    var name;
    var title;
    if(index == 1){
        name = document.querySelector(".name1");
        title = document.querySelector(".title1");        
        n = 1;
    }else if(index == 2){
        name = document.querySelector(".name2");
        title = document.querySelector(".title2");
        n = 2;
    }else if(index == 3){
        name = document.querySelector(".name3");
        title = document.querySelector(".title3");
        n = 3;
    }else if(index == 4){
        name = document.querySelector(".name4");
        title = document.querySelector(".title4");
        n = 4;
    }else if(index == 5){
        name = document.querySelector(".name5");
        title = document.querySelector(".title5");
        n = 5;
    }else if(index == 6){
        name = document.querySelector(".name6");
        title = document.querySelector(".title6");
        n = 6;
    }else if(index == 7){
        name = document.querySelector(".name7");
        title = document.querySelector(".title7");
        n = 7;
    }else if(index == 8){
        name = document.querySelector(".name8");
        title = document.querySelector(".title8");
        n = 8;
    }else if(index == 9){
        name = document.querySelector(".name9");
        title = document.querySelector(".title9");
        n = 9;
    }
    
    
    name.animate({opacity: 1},animateTiming);
    title.animate({transform: 'translateY(-5px) scale(0.5)'},animateTiming);
}

function hideName(){
    var name;
    var title;
    switch(n){
        case 1: 
            name = document.querySelector(".name1"); 
            title = document.querySelector(".title1");
            break;
        case 2:
            name = document.querySelector(".name2"); 
            title = document.querySelector(".title2");
            break;
        case 3:
            name = document.querySelector(".name3"); 
            title = document.querySelector(".title3");
            break;
        case 4:
            name = document.querySelector(".name4"); 
            title = document.querySelector(".title4");
            break;
        case 5:
            name = document.querySelector(".name5"); 
            title = document.querySelector(".title5");
            break;
        case 6:
            name = document.querySelector(".name6"); 
            title = document.querySelector(".title6");
            break;
        case 7:
            name = document.querySelector(".name7"); 
            title = document.querySelector(".title7");
            break;
        case 8:
            name = document.querySelector(".name8"); 
            title = document.querySelector(".title8");
            break;
        case 9:
            name = document.querySelector(".name9"); 
            title = document.querySelector(".title9");
            break;
        default:break;
    }

    name.animate({opacity: 0},animateTiming);
    title.animate({transform: 'translateY(-20px) scale(1)'},animateTiming);

    n = 0;
}

function revealBio(index){
    var bio;
    var desc;

    if(m == 0){
        if(index == 1){
            bio = document.querySelector(".p1");
            desc = document.querySelector(".bp1");
            m = 1;
        }else if(index == 2){
            bio = document.querySelector(".p2");
            desc = document.querySelector(".bp2");
            m = 2;
        }else if(index == 3){
            bio = document.querySelector(".p3");
            desc = document.querySelector(".bp3");
            m = 3;
        }else if(index == 4){
            bio = document.querySelector(".p4");
            desc = document.querySelector(".bp4");
            m = 4;
        }else if(index == 5){
            bio = document.querySelector(".p5");
            desc = document.querySelector(".bp5");
            m = 5;
        }else if(index == 6){
            bio = document.querySelector(".p6");
            desc = document.querySelector(".bp6");
            m = 6;
        }else if(index == 7){
            bio = document.querySelector(".p7");
            desc = document.querySelector(".bp7");
            m = 7;
        }else if(index == 8){
            bio = document.querySelector(".p8");
            desc = document.querySelector(".bp8");
            m = 8;
        }else if(index == 9){
            bio = document.querySelector(".p9");
            desc = document.querySelector(".bp9");
            m = 9;
        }

        desc.style.display = 'flex';
        bio.animate({transform: 'scale(1.50) translateX(-200px)'},animateTiming);
        bio.animate({transform: 'scale(1.25) translateX(-200px)'},animateTiming);
        desc.animate({opacity: 1},animateTiming)
        bio.style.zIndex = "4";
        desc.style.zIndex = "3";
    }
}

function closeBio(){
    var bio;
    var desc;
    switch(m){
        case 1: 
            bio = document.querySelector(".p1"); 
            desc = document.querySelector(".bp1");
            break;
        case 2:
            bio = document.querySelector(".p2"); 
            desc = document.querySelector(".bp2");
            break;
        case 3:
            bio = document.querySelector(".p3"); 
            desc = document.querySelector(".bp3");
            break;
        case 4:
            bio = document.querySelector(".p4"); 
            desc = document.querySelector(".bp4");
            break;
        case 5:
            bio = document.querySelector(".p5"); 
            desc = document.querySelector(".bp5");
            break;
        case 6:
            bio = document.querySelector(".p6"); 
            desc = document.querySelector(".bp6");
            break;
        case 7:
            bio = document.querySelector(".p7"); 
            desc = document.querySelector(".bp7");
            break;
        case 8:
            bio = document.querySelector(".p8"); 
            desc = document.querySelector(".bp8");
            break;
        case 9:
            bio = document.querySelector(".p9"); 
            desc = document.querySelector(".bp9");
            break;
        default:break;
    }

    bio.animate({transform: 'scale(1)'},animateTiming);
    desc.animate({opacity: 0},animateTiming);
    desc.style.display = 'none';
    bio.style.zIndex = "2";
    desc.style.zIndex = "1";
    m = 0;
}