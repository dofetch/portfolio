// Global variables
var spotlightDiameter = 200;


// Verify that the mouse event wasn't triggered by a descendant.
function verifyMouseEvent(e, elem) {
    e = e || window.event;
    var related = e.relatedTarget || e.toElement;

    while ((related != undefined) &&
           (related != elem) &&
           (related.nodeName != 'BODY'))
    {
        related = related.parentNode;
    }
    return (related != elem);
}


// Create the spotlight
function createSpotlight() {
    $('.highlight').width(spotlightDiameter + 'px')
                   .height(spotlightDiameter + 'px')
                   .css({borderRadius: (spotlightDiameter >> 1) + 'px'});
}


// Mousemove
$('.intro-message h2').on('mousemove', function(e){
    var center = {x: e.pageX - this.offsetLeft,
                  y: e.pageY - this.offsetTop};
    var x = center.x - (spotlightDiameter >> 1);
    var y = center.y - (spotlightDiameter >> 1);

    $('.highlight').css({left: x + 'px', top: y + 'px',
                          backgroundPosition: -x + 'px ' + -y + 'px'}).show();
});


// Mouseover
$('.intro-message h2').on('mouseout', function(e){
    if (!verifyMouseEvent(e, this)) return;
    $('.highlight').hide();
});


$(document).ready(function(){
    createSpotlight();
});



