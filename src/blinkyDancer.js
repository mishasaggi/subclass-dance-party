var makeBlinkyDancer = function(top, left, timeBetweenSteps){
 // debugger;
  this.$node = $('<span class="blinkyDancer"></span>');
  this.$node.css(makeDancer.prototype.setPosition.call(this,top,left));
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

