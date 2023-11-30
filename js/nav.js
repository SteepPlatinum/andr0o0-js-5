let navitems = ["home", "about", "gallery", "contact"];
let navlinks = ["index.html", "#", "#", "#"];
let navlength = navitems.length
let navtext = '<ul class="flex">';
for (i = 0; i < navlength; i++) {
    navtext += '<li><a href="' + navlinks
    [i] + ' ">' + navitems[i] + "</a><li>";
}
navtext += "</ul>";
document.getElementById("nav").innerHTML = navtext;

