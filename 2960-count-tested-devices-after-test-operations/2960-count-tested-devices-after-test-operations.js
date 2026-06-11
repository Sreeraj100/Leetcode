/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    return batteryPercentages.reduce((r, v) => r + +(v > r), 0)
};