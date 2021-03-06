import Tween from './tween';

const customAnimation = exports.customAnimation = {};

customAnimation.to = function (duration, from, to, type) {
  for (let prop in from) {
    TweenAnimation(from[prop], to[prop], duration, type, (value, complete) => {
      from[prop] = value;
    });
  }
}

const TweenAnimation = exports.TweenAnimation = function TweenAnimation(from, to, duration, type, callback) {
  const frameCount = duration * 1000 / 17;
  let start = -1;
  const startTime = Date.now();
  let lastTime = Date.now();

  const tweenFn = Tween[type];

  const options = {
    callback: function () {},
    type: 'linear',
    duration: 300
  }

  if (callback) options.callback = callback;
  if (type) options.type = type;
  if (duration) options.duration = duration;

  const step = function step() {
    const currentTime = Date.now();
    const interval = currentTime - lastTime;

    let fps;
    if (interval) {
      fps = Math.ceil(1000 / interval);
    } else {
      requestAnimationFrame(step);
      return;
    }

    if (fps >= 30) {
      start++;
    } else {
      const _start = Math.floor(interval / 17);
      start += _start;
    }

    const value = tweenFn(start, from, to - from, frameCount);

    if (start <= frameCount) {
      // 动画继续
      options.callback(value);
      requestAnimationFrame(step);
    } else {
      // 动画继续
      options.callback(to, true);
    }

    lastTime = Date.now();
  }

  step();
}