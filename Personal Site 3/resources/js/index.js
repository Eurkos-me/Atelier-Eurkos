$('.nav_link').on('click', function () {
    var clickedLink = this.id;
    animateClick(clickedLink);
});

function animateClick(e) {
    $('.nav_link').text(function(i,v){
        return v.replace('――','―');
     });
    $('.nav_link').removeClass('clicked');
    $('#' + e).prepend('―');
    $('#' + e).addClass('clicked');    
}