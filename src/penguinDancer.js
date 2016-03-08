var makePenguin = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$penguinGif = $('<img class="gif" src="images/penguin.gif" alt="penguinDancer"/>');
  this.$node.append(this.$penguinGif);
};

makePenguin.prototype = Object.create(makeDancer.prototype);
makePenguin.prototype.constructor = makePenguin;

makePenguin.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};
