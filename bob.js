/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let answer;
  let question = message.trim();
  let yell = new RegExp("[^\\W\\d_]+");

  if(!question){
    answer = "Fine. Be that way!";
  }else if(yell.test(message) === true && message === message.toUpperCase() && message.endsWith("?")){
    answer = "Calm down, I know what I'm doing!"
  }else if(yell.test(message) === true && message === message.toUpperCase()){
    answer = "Whoa, chill out!";
  }else if(question.substr(question.length-1) === "?"){
    answer = "Sure.";
  }else{
    answer = "Whatever.";
  }
  return answer;
};




/*
DEBUT
  let answer
  function hey(message)
    let question = message.trim()
    SI message est en MAJUSCULE ALORS
      answer = "Whoa, chill out!"
    SINON SI message est en MAJUSCULE et TERMINE PAR ? ALORS
      answer = "Calm down, I know what I'm doing!"
    SINON
      answer = 'Whatever.' 
    FINSI

FIN
*/