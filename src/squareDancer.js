var makeSquareDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="squareDancer"></span>');
  this.$node.css(makeDancer.prototype.setPosition.call(this,top,left));
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeSquareDancer.prototype = Object.create(makeDancer.prototype);

makeSquareDancer.prototype.constructor = makeSquareDancer;

makeSquareDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.animate({opacity: "toggle"});
};
