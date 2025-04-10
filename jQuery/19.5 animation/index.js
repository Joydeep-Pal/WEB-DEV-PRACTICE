
// Hide element

// $("<selector>").hide();     --> hide an element
// $("<selector>").show();     --> unhide an element
// $("<selector>").toggle();   --> toggles hide/show an element

$(".hide").click(function(){
    $("h1").toggle();
})



// Fade element

// $("<selector>").fadeOut();      --> fade out an element
// $("<selector>").fadeIn();       --> fade in an element
// $("<selector>").fadeToggle();   --> toggles fadeOut/fadeIn an element

$(".fade").click(function(){
    $("h1").fadeToggle();
})