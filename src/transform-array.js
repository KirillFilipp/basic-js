module.exports = function transform(arr) {
    let arrTrans = [];
    if (!Array.isArray(arr)) {
        throw new Error();
    }
    for (let index = 0; index < arr.length; index++) {
        let e = arr[index];
        if (e === '--discard-next') {
            index = index + 1;
        } else if (e === '--discard-prev') {
            arrTrans.pop();
        } else if (e === '--double-next') {
            if (typeof arr[index + 1] !== 'undefined') {
                arrTrans.push(arr[index + 1]);
            } else { }
        } else if (e === '--double-prev') {
            if (typeof arr[index - 1] !== 'undefined') {
                arrTrans.push(arr[index - 1]);
            } else { }
        } else {
            if (typeof e !== 'undefined') {
                arrTrans.push(e);
            } else { }
        }
    }
    return arrTrans;
};