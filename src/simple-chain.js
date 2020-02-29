
const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    //if (!value && typeof value !== 'undefined') {
    //  throw new Error;
    //} else {
    this.chainArr.push(`( ${value} )`);
    return this;
    //}
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || (position ^ 0) !== position || this.chainArr.length < position) {
      this.chainArr = [];
      throw new Error('error');
    } else {
      this.chainArr.splice((position - 1), 1);
      return this;
    }
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    if (this.chainArr.length > 0) {

      let result = this.chainArr.join('~~')
      this.chainArr = [];
      return result;//this.chainArr.join('~~');
    } else {
      throw new Error('error');
    }
  }
};

module.exports = chainMaker;
