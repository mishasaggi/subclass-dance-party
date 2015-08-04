// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function(){
  var that = this;
  setTimeout(function() {that.step();}, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  return styleSettings;
};
