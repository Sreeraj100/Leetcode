/**
 * @param {string[]} events
 * @return {number[]}
 */
var scoreValidator = function(events) {
    let score = 0
    let counter = 0
    for (let i = 0; i < events.length; i++) {
        if (counter === 10) {
            break;
        }
        switch (events[i]) {
            case "W":
                counter++;
                break;
            case "WD":
                score++;
                break;
            case "NB":
                score++;
                break;
            default:
                score += Number(events[i])
        }
    }
    return [score, counter]
};