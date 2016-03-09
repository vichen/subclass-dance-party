$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      Math.max(50, $('.dancefloor').height() * Math.random()),
      Math.max(50, $('.dancefloor').width() * Math.random()),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    console.log(window.dancers);
    $('.dancefloor').append(dancer.$node);
    dancer.collide();
  });


  $('.lineup').on('click', function(event) {
    $.each($('.dancer'), function(index, dancer) {
      var fromTop = $(window).height() / 2.35;
      var fromLeft = 100 + (100 * index);
      $(this).css({'top': fromTop, 'left': fromLeft});
    });    
  });

  $('body').on('mouseover', '.dancer', function(event) {
    $(this).draggable();
  });


  var dblClicked = false;
  $('body').on('dblclick', '.dancer', function(event) {
    var dancer = $(this);
    if (dblClicked) {
      $(document).unbind('mousemove');
      dblClicked = false;
    } else {
      $(document).bind('mousemove', function(e) {
        $.each($('.dancer'), function(index, dancer) {
          $(this).css({
            left: e.pageX + index * 100,
            top: e.pageY + index * 100
          });
        });
      });
      dblClicked = true;
    }
  });

  var clicked = false;
  $('body').on('click', 'img', function(event) {
    var dancer = $(this);
    if (clicked) {
      dancer.animate({width: '100px'}, 500);
      clicked = false;
      $('body').on('keydown', function(e) {
        switch (e.which) {
        case 37:
          dancer.stop(); //left arrow key
          break;
        case 38:
          dancer.stop(); //up arrow key
          break;
        case 39:
          dancer.stop(); //right arrow key
          break;
        case 40:
          dancer.stop(); //bottom arrow key
          break;
        }
      });
    } else {
      dancer.animate({width: '200px'}, 500);
      clicked = true;
      $('body').on('keydown', function(e) {
        switch (e.which) {
        case 37:
          dancer.stop().animate({
            left: '-=30'
          }, 50); //left arrow key
          break;
        case 38:
          dancer.stop().animate({
            top: '-=30'
          }, 50); //up arrow key
          break;
        case 39:
          dancer.stop().animate({
            left: '+=30'
          }, 50); //right arrow key
          break;
        case 40:
          dancer.stop().animate({
            top: '+=30'
          }, 50); //bottom arrow key
          break;
        }
      });
    }
  });



  $('.dropdown-content').on('click', 'a', function(event) {
    var danceMove = $(this).text();
    $.each($('.dancer'), function(index, dancer) {
      $(this).addClass('animated ' + danceMove).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated ' + danceMove);
      });
    });
  });


});