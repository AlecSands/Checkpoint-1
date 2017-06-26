console.log('javascript loaded');

var numberOfClicks = 0;

$('document').ready(function() {
  console.log('jquery loaded');

  $('button').on('click', function(){
    numberOfClicks += 1;
    var $el = $('<div class="red"><p>' + numberOfClicks + '</p></div>');
    $('body').append($el);
    $el.append('<button type="button" name="Swap" class="swapButton">Swap</button>');
    $el.append('<button type="button" name="Delete" class ="deleteButton">Delete</button>');
  });

  $('body').on('click', '.swapButton', function(){
    var parentDiv = $(this).parent();
    if (parentDiv.attr('class') == 'red') {
      parentDiv.removeClass("red");
      parentDiv.addClass("yellow");
    } else if (parentDiv.attr('class') == 'yellow') {
      parentDiv.removeClass("yellow");
      parentDiv.addClass("red");
    }
  });

  $('body').on('click', '.deleteButton', function(){
    var parentDiv = $(this).parent();
    parentDiv.remove();
  });

});
