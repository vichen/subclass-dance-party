// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // this.top = top;
  // this.left = left;
  this.timeBetweenSteps = timeBetweenSteps; 
  this.step();
  this.top = top;
  this.left = left;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step
makeDancer.prototype.step = function() {
  var dancerInstance = this;
  setTimeout(function() { dancerInstance.step(); }, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};

makeDancer.prototype.collide = function() {
  for (i = 0; i < window.dancers.length; i++) {
    console.log('TOP', window.dancers[i].top);
    console.log('THIS TOP', this.top);
    console.log('left', window.dancers[i].left);
    console.log('this left', this.left);
    if (window.dancers[i].top - this.top < 20 && window.dancers[i].left - this.left < 20) {
      if (window.dancers[i] !== this) {
        this.$node.find('img').attr('src', 'images/star.gif-c200');  
      }
    }
  }
/* 
if dancer.height() 
Make dancers that interact with other dancers.
For example, by iterating across the array window.dancers and using the Pythagorean Theorem to calculate your distance from each other dancer, you can have a dancer find its n closest neighbors and do something based on their positions.
*/

};