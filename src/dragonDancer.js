var makeDragon = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$dragonGif = $('<img class="gif" src="images/dragon.gif" alt="dragonDancer"/>');
  this.$node.append(this.$dragonGif);
};

makeDragon.prototype = Object.create(makeDancer.prototype);
makeDragon.prototype.constructor = makeDragon;

makeDragon.prototype.step = function() {
  makeDancer.prototype.step.call(this);

};
