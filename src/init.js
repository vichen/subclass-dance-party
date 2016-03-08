$(document).ready(function() {
  //window.dancers = [];

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
    $('.dancefloor').append(dancer.$node);
  });


  $('.lineup').on('click', function(event) {

    $.each($('.dancer'), function(index, dancer) {
      var fromTop = $(window).height() / 2.35;
      var fromLeft = 100 + (100 * index);
      $(this).css({'top': fromTop, 'left': fromLeft});
    });
    
  });

  $('body').on('click', '.dancer', function(event) {
    // $(this).keydown(function(event) {
    //   switch (event.which) {
    //   case 37: // left arrow
    //     console.log('hi');
    //     break;
    //   }
    // });
    console.log($(this));
    
  });

});

