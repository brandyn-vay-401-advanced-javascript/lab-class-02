'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }
  
  // Removes the first element from an array and returns that removed element
  shift() {
    let result = this.data[0];
    delete this.data[0];
    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    delete this.data[--this.length];
    return result;
  }

  unshift(input) {
    let newData = new List();
    newData.push(input);
    for (let i = 0; i < this.length; i++) {
      newData.push(this.data[i]);
    }
    this.data = newData.data;
    this.length++;
    return this.length;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i], [i], this.data);
    }
  }

  map(callback) {
    let returnValue = new List();
    for (let i = 0; i < this.length; i++) {
      returnValue.push(callback(this.data[i], i, this.data));
    }
    return returnValue.data;
  }

  filter(callback) {
    let returnValue = new List();
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i, this.data)) { 
        returnValue.push(this.data[i]); 
      }
    }
    return returnValue.data;
  }

  reduce(callback, start) {
    let acc = start;
    for (let i = 0; i < this.length; i++) {
      acc = callback(acc, this.data[i], i, this.data);
    }
    return acc;
  }

}

module.exports = List;
