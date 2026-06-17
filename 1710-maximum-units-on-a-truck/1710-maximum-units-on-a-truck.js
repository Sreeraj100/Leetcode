/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1])
  
  let result = 0
  for (const [ boxes, units ] of boxTypes) {
    const takeBoxes = Math.min(boxes, truckSize)
    result += units * takeBoxes
    truckSize -= takeBoxes
    if (!truckSize) break
  }

  return result
};