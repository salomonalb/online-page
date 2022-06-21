/*
If the window width is greater than or equal to 769px, then the images will be the desktop versions.
If the window width is less than 769px, then the images will be the mobile versions.
*/

let curvedTop1 = document.getElementById('curved-top-1');

let curvedBottom1 = document.getElementById('curved-bottom-1');

let curvedTop2 = document.getElementById('curved-top-2');

let curvedBottom2 = document.getElementById('curved-bottom-2');

let curvedFooter = document.getElementById('curved-footer');

function changeImages() {

    if (window.innerWidth >=  769) {
        curvedTop1.src = "images/bg-section-top-desktop-1.svg";
        curvedBottom1.src = "images/bg-section-bottom-desktop-1.svg";
        curvedTop2.src = "images/bg-section-top-desktop-2.svg";
        curvedBottom2.src = "images/bg-section-bottom-desktop-2.svg";
        curvedFooter.src = "images/bg-footer-top-desktop.svg";
        } else {
        curvedTop1.src = "images/bg-section-top-mobile-1.svg";
        curvedBottom1.src = "images/bg-section-bottom-mobile-1.svg";
        curvedTop2.src = "images/bg-section-top-mobile-2.svg";
        curvedBottom2.src = "images/bg-section-bottom-mobile-2.svg";
        curvedFooter.src = "images/bg-footer-top-mobile.svg";
    }
}

changeImages()

window.onresize = () => {
    changeImages()
}



