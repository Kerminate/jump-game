const Tween = {
  Linear: function Linear(currentFrame, from, range, totalFrameCount) {
    return range * currentFrame / totalFrameCount + from;
  }
};

export default Tween;