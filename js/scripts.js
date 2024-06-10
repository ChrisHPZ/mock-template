function getYear() {
    const d = new Date();
    let year = d.getFullYear();
    return "&copy" + year;
}
document.getElementById("footer").innerHTML = getYear();

$(document).ready(function(){
 $("nav li a").click(function(e){
    e.preventDefault();
    var divID = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(divID).offset().top - $("nav").outerHeight()
    }, 750);
 });
});