//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  array = [];
  push(param) {
    this.array.push(param);
  }

  pop() {
    return this.array.pop();
  }

  shift() {
    return this.array.shift();
  }

  unshift(param) {
    this.array.unshift(param);
  }

  delete(i) {
    let temp;
    let trueOrFalse;
    const isExist = this.array.find(element => {
      return element === i;
    });
    
    if(isExist !== undefined){
      trueOrFalse = true;
    } else { 
      trueOrFalse = false;
    };
    
    if(trueOrFalse === true){
      this.array.find((element, index) => {
        temp = index;
        return element === i;
      });
      this.array.splice(temp, 1);
    }
  }

  count() {
    if(this.array != 0){
      return this.array.length;
    } else { 
      return 0;
    }
  }
}
