'use strict';

/**
 * Search string for first occurance of target and offset, 
 * returns true if distance between target and offset is within threshold, 
 * or if target is present and offset is absent.
 *
 * @param  {String} text
 * @param  {String} target
 * @param  {String} offset
 * @param  {Integer} threshold
 * @return {Boolean}
 */
module.exports = function(text, target, offset, threshold) {
  if (!text || !target || !offset) return false;

  if (!threshold) threshold = 25;

  var d,
      t = text.toLowerCase().indexOf(target.toLowerCase()),
      o = text.toLowerCase().indexOf(offset.toLowerCase());

  if (t > o) {
    d = t - o;
  } else if (t > 0 && o > t) {
    d = o - t;
  }

  if (d < threshold && d > 0) return true;
  return t >= 0 && o < 0;
}
