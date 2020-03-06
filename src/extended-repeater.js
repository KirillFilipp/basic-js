module.exports = function repeater(str, options) {
    let result = [];
    const additionResult = [];
    let string = str.toString();

    let addition, additionRepeatTimes, separator, repeatTimes, additionSeparator;

    if (options.additionSeparator && options.additionRepeatTimes > 0) {
        additionSeparator = options.additionSeparator;
    } else {
        additionSeparator = '';
    }

    if (options.repeatTimes && !isNaN(options.repeatTimes)) {
        repeatTimes = options.repeatTimes;
    } else {
        repeatTimes = 1;
    }

    if (options.additionRepeatTimes && !isNaN(options.additionRepeatTimes) ) {
        additionRepeatTimes = options.additionRepeatTimes;
    } else {
        additionRepeatTimes = 1;
    }

    if (options.addition) {
        addition = options.addition.toString();
        for (let i = 0; i < additionRepeatTimes; i++) {
            additionResult.push(addition);
        }
        addition = additionResult.join(additionSeparator);
    } else {
        addition = '';
    }

    if (options.separator) {
        separator = options.separator;
    } else {
        separator = '+';
    }

    for (let i = 0; i < repeatTimes; i++) {
        result.push(string.concat(addition));
    }

    return result.join(separator);
};