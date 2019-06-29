'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

List.prototype.shift = function () {
  let result = this.data[0];
  delete this.data[0];

  for (let i = 1; i < this.length; i++) {
    this.data[i - 1] = this.data[i];
  }

  delete this.data[--this.length];
  return result;
};

List.prototype.unshift = function (input) {
  let newData = new List();
  newData.push(input);

  for (let i = 0; i < this.length; i++) {
    newData.push(this.data[i]);
  }

  this.data = newData.data;
  this.length++;
  return this.length;
};

List.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this.data[i], [i], this.data);
  }
};

List.prototype.map = function (callback) {
  let returnValue = new List();

  for (let i = 0; i < this.length; i++) {
    returnValue.push(callback(this.data[i], i, this.data));
  }

  return returnValue.data;
};

List.prototype.filter = function (callback) {
  let returnValue = new List();

  for (let i = 0; i < this.length; i++) {
    if (callback(this.data[i], i, this.data)) { 
      returnValue.push(this.data[i]); 
    }
  }

  return returnValue.data;
};

List.prototype.reduce = function (callback, start) {
  let acc = start;

  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this.data[i], i, this.data);
  }

  return acc;
};

module.exports = List;
