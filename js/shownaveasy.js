let shownaveasy = () => {
    let navheight = document.getElementById("header").style.height;
    console.log(navheight);



    if (navheight == '280px') {
        document.getElementById("header").style.height = '50px';
        document.getElementById("burgerbar").innerHTML='<i class="fa-solid fa-bars"></i>';
}
    else {
        document.getElementById("header").style.height = '280px';
        document.getElementById("burgerbar").innerHTML='<i class="fa-solid fa-xmark"></i>';
}
}
