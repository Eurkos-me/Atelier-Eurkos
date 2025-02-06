$( ".arrow" ).hover(function() {
    $( this ).append('<img class="side-link" src="./images/forward.svg" />');
}, function() {
    $( this ).find('img:last').remove();
}
);