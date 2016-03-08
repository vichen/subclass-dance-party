var makePanda = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$pandaGif = $('<img class="gif" src="images/panda.gif" alt="pandaDancer"/>');
  this.$node.append(this.$pandaGif);
};

makePanda.prototype = Object.create(makeDancer.prototype);
makePanda.prototype.constructor = makePanda;

makePanda.prototype.step = function() {
  makeDancer.prototype.step.call(this);

};
