$('document').ready(function() {
  $('p1').click(function() {
    alert('hello');
  })

});



$('img').click(function() {
  $(this).slideToggle("slow", function() {
    // Animation complete.
  });
});

$('.restoreButton').click(function() {
  $('img').show();
});
