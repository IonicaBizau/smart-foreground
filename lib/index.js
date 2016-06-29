"use strict";

const color = require("color");

/**
 * smartForeground
 * Get a good foreground color based on a backgorund color.
 *
 * @name smartForeground
 * @function
 * @param {String} bgColor The backgorund color (supports hex, rgb etc).
 * @param {Array} fgColors An optional array of *ordered* foreground color codes (default: `[black, white]`). The lighter colors should be the first ones.
 * @returns {String} The best foregorund color to use (e.g. for a black background, by default it will return white).
 */
module.exports = function smartForeground (bgColor, fgColors) {
    fgColors = fgColors || ["#fffff", "#00000"];
    let parsed = color(bgColor)
      , breakPoint = 256 / fgColors.length
      , rgb = parsed.values.rgb
      , yic = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000
      ;

    for (let i = 0; i < fgColors.length; ++i) {
        if (yic < (breakPoint * (i + 1))) {
            return fgColors[i];
        }
    }

    return fgColors[0];
};
