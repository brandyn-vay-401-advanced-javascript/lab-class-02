'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
// const List = require('../list-constructor.js');

const faker = require('faker');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('shifts the first position of an array', () =>{
    let stuff = new List();
    let arr = [2,7,8,6];
    arr.forEach(item => stuff.push(item));
    expect(stuff.shift()).toEqual(2);
    expect(stuff.data).toEqual({0:7,1:8,2:6});
  });

  it('shifts things EXACTLY the way you would hope it does', () => {
    let stuff = new List();
    let arr = [faker.random.arrayElement(), faker.random.arrayElement(), faker.random.arrayElement(), faker.random.arrayElement(), faker.random.arrayElement()];
    arr.forEach(item => stuff.push(item));
    expect(stuff.shift()).toEqual(arr.shift());
  });

  it('unshift prepends an element to the beginning of the array', () => {
    let stuff = new List();
    let arr = [faker.random.arrayElement(),faker.random.arrayElement(),faker.random.arrayElement(),faker.random.arrayElement(),faker.random.arrayElement()];
    arr.forEach(item => stuff.push(item));
    let newItem = faker.random.arrayElement();
    expect(stuff.unshift(newItem)).toEqual(6);
    expect(stuff.data[0]).toEqual(newItem);
  });

  it('it does what you think it does, foreaches', () => {
    let arr = [1,2,3,4,5,7,8];
    let stuff = new List();
    arr.forEach(item => stuff.push(item));
    expect(stuff.forEach((item,idx) => (item,idx))).toEqual(arr.forEach((item,idx) => (item, idx)));
  });

  it('Maps over the array', () => {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let stuff = new List();
    let chkList = new List();
    arr.forEach(item => stuff.push(item));
    let sqArr = arr.map(item => item * item);
    sqArr.forEach(item => chkList.push(item));
    expect(stuff.map(item => item* item)).toEqual(chkList.data);
  });

  it('Filters the array', () => {
    let arr = [1,2,3,4,22,5,6,19,8,14,5,11];
    let filterArr = arr.filter(val => val % 2);
    let stuff = new List();
    let chkList = new List();
    arr.forEach(item => stuff.push(item));
    filterArr.forEach(item => chkList.push(item));
    expect(stuff.filter(val => val%2)).toEqual(chkList.data);
  });

  it('Reduces the array', () => {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let reduced = arr.reduce((acc,val) => {
      return acc+val;
    },0);
    let stuff = new List();
    arr.forEach(item => stuff.push(item));
    expect(stuff.reduce((acc,val) => {
      return acc+val;
    }, 0))
      .toEqual(reduced);
  });
});
