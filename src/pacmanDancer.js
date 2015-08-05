var makePacmanDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="pacmanDancer"></span>');
  this.$node.css(makeDancer.prototype.setPosition.call(this,top,left));
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makePacmanDancer.prototype = Object.create(makeDancer.prototype);

makePacmanDancer.prototype.constructor = makePacmanDancer;
var toggle = true;
makePacmanDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  if (toggle) {
    toggle = false;
    this.$node.toggleClass( 'pacmanDancer', true);
    this.$node.toggleClass( 'closed', false);
  } else {
    toggle = true;
    this.$node.toggleClass( 'pacmanDancer', false);
    this.$node.toggleClass( 'closed', true);
  }




  //animate({ "left": "-=50px" }, "slow" )
};
