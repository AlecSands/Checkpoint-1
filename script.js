console.log('javascript loaded');

var numberOfClicks = 0;

$('document').ready(function() {
  console.log('jquery loaded');

  $('button').on('click', function(){
    numberOfClicks += 1;
    $('body').append('<div><p>' + numberOfClicks + '</p></div>');
  });

});
