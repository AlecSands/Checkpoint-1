console.log('javascript loaded');

var numberOfClicks = 0;

$('document').ready(function() {
  console.log('jquery loaded');

  $('button').on('click', function(){
    numberOfClicks += 1;
    var $el = $('<div class="red"><p>' + numberOfClicks + '</p></div>');
    $('body').append($el);
    $el.append('<button type="button" name="Swap">Swap</button>');
    $el.append('<button type="button" name="Delete">Delete</button>');
  });

});
