class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;

  }
  add(item) {
    this.items.push(item);
    this.length ++;
  }
  get(pos) {
      if(pos > this.length){
        throw new Error ('OutofBounds');
      }
      return this.items[pos-1];

  }
  max() {
    if(this.items.length > 0){
      //return Math.max.apply(null,this.items);
      //return Math.max.apply(...this.items);
      return this.items[this.length - 1];
    }
    else {
      throw new Error('EmptySortedList');
    }
  }
  min() {
    if(this.items.length > 0){
      //return Math.min.apply(null,this.items);
      //return Math.min.apply(...this.items);
      return this.items[0];
    }
    else {
      throw new Error('EmptySortedList');
    }

  }
  average() {
    if(this.length)
      return this.sum()/this.items.length;
    else throw new Error('EmptySortedList');
  }
  sum() {
    return this.items.reduce((item,reduce)=>{return item-reduce} , 0)

  }
};

module.exports = SortedList;
