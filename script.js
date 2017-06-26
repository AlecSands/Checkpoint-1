console.log('javascript loaded');

$('document').ready(function() {
  console.log('jquery loaded');
  
  $('button').on('click', function(){
    $('body').append('<div></div>');
  });

});
