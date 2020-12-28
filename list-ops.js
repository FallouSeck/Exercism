//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Person {
  cv = [];

  constructor(params) {
    if (params) {
      this.cv = params;
    }
  }

  append(list2) {
    const list2Values = list2.cv;
    if (list2Values) {
      for (let index = 0; index < list2Values.length; index++) {
        const element = list2Values[index];
        this.cv.push(element);
      }
    }
    return this;
  }

  concat(person2) {
    const person2Cv = person2.cv;
    for (let index = 0; index < person2Cv.length; index++) {
      const element = person2Cv[index].cv;
      for (let i = 0; i < element.length; i++) {
        const el = element[i];
        this.cv.push(el);
      }
    }
    return this;
  }

  filter(funct) {
    let list = [];
    for (let index = 0; index < this.cv.length; index++) {
      const element = this.cv[index];
      const estImpair = funct(element);
      if(estImpair === true){
        list.push(element);
      }
    }
    this.cv = list;
    return this;
  }

  map(funct) {
    let newCv = [];
    for (let index = 0; index < this.cv.length; index++) {
      const element = this.cv[index];
      const result = funct(element);
      newCv.push(result);
    }
    this.cv = newCv;    
    return this;
  }

  length() {
    let count = 0;
    this.cv.forEach(() => count++)
    return count;
  }

  foldl(callback, val) {
    let num = val; 
    for (let index = 0; index < this.cv.length; index++) {
      const element = this.cv[index];
      const result = callback(num, element);     
      num = result;      
    }
    return num;
  }

  foldr(callback, val) {
    let num = val; 
    for (let index = this.cv.length-1; index >= 0; index--) {
      const element = this.cv[index];
      const result = callback(num, element);     
      num = result; 
    }
    return num;
  }

  reverse() {
    let result = [];
    for (let index = 0; index < this.cv.length; index++) {
      const element = this.cv[index];
      result.unshift(element);
    }
    this.cv = result;
    return this;
  }
}
