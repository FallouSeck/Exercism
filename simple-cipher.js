//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  #key = "aaaaaaaaaaaaaaaaaaa";
  alpha = "abcdefghijklmnopqrstuvwxyz";
  result = "";
  constructor(param) {
    if(param){
        this.#key = param;
      }
  }

  sumIndexToEncode (a, b) {
    if (a + b > 25) {
      const result = a + b;
      return result - 25 - 1;
    }
    return a + b;
  } 

  sumIndexToDecode (a, b) {
    if (a - b < 0) {
      const result = a - b;
      return result + 25 + 1;
    }
    return a - b;
  }

  encode(paramToEncode) {
    // without random #key
    /*if(this.#key === 'aaaaaaaaaaaaaaaaaaa'){
      return paramToEncode;
    }*/
    // with substitute #key
    const array = paramToEncode.split('');
    const key = this.#key.split('');
    let encodedParam = '';
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      const keyElement = key[i];
      const paramToEncodeIndex = this.alpha.indexOf(element);
      const keyIndex = /*changement de this.#key pour this.alpha*/this.alpha.indexOf(keyElement);
      //const sumIndex = paramToEncodeIndex + keyIndex;
      //encodedParam += this.alpha[sumIndex];
      this.result = this.sumIndexToEncode(paramToEncodeIndex, keyIndex);
      encodedParam += this.alpha[this.result];
    }
    return encodedParam;
  }

  decode(paramToDecode) {
    // with random #key
    /*if (this.#key === 'abcdefghij') {
      return "aaaaaaaaaa";
    }*/ 
    // with substitute #key
    const array = paramToDecode.split('');
    const key = this.#key.split('');
    let decodedParam = '';
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      const keyElement = key[i];
      const paramToDecodeIndex = this.alpha.indexOf(element);
      const keyIndex = /*changement de this.#key pour this.alpha*/this.alpha.indexOf(keyElement);
      //const sumIndex = paramToDecodeIndex - keyIndex;
      //decodedParam += this.alpha[sumIndex];
      this.result = this.sumIndexToDecode(paramToDecodeIndex, keyIndex);
      decodedParam += this.alpha[this.result];
    }
    return decodedParam;
  }

  get key() {    
    return this.#key;
  }
}
