let shownav = () => {
    let navheight = document.getElementById("header").style.height;
    console.log(navheight);



    if (navheight == '180px') {
        document.getElementById("header").style.height = '50px'; 
        document.getElementById("line2").style.display = 'block';
        document.getElementById("line1").style.transform ="rotate(0deg)";
        document.getElementById("line3").style.transform ="rotate(0deg)";
        document.getElementById("line3").style.marginTop='5px';
    }
    else {
        document.getElementById("header").style.height = '180px';
        document.getElementById("line2").style.display = 'none';
        document.getElementById("line1").style.transform ="rotate(-45deg)";
        document.getElementById("line3").style.transform ="rotate(45deg)";
        document.getElementById("line3").style.marginTop='-1px';
        

}
}

