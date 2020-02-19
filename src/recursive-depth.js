module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1, thisDepth) {
        if (Array.isArray(arr)) {
            thisDepth = 1 + Math.max(...arr.map(t => this.calculateDepth(t, depth)));
            if (thisDepth > depth) {
                depth = thisDepth;
            }
            return depth;
        } else {
            return depth = 0;
        }
    }
};