let solution = (() => {
    return {
        add: (firstVector, secondVector) =>
            [firstVector[0] + secondVector[0], firstVector[1] + secondVector[1]],
        multiply: (vector, scalar) =>
            [vector[0] * scalar, vector[1] * scalar],
        length: vector =>
            Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]),
        dot: (firstVector, secondVector) =>
            firstVector[0] * secondVector[0] + firstVector[1] * secondVector[1],
        cross: (firstVector, secondVector) =>
            firstVector[0] * secondVector[1] - firstVector[1] * secondVector[0]
    }
})();

/**
 * Judge friendly...
 */
(function () {
        return solve = {
            add: (firstVector, secondVector) => [firstVector[0] + secondVector[0], firstVector[1] + secondVector[1]],
            multiply: (vector, scalar) => [vector[0] * scalar, vector[1] * scalar],
            length: vector => Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]),
            dot: (firstVector, secondVector) => firstVector[0] * secondVector[0] + firstVector[1] * secondVector[1],
            cross: (firstVector, secondVector) => firstVector[0] * secondVector[1] - firstVector[1] * secondVector[0]
        }
    

})();

console.log(solve.add([1, 1], [1, 0]))