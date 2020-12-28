//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([color1, color2]) => {
  let result = `${COLORS.indexOf(color1)}${COLORS.indexOf(color2)}`;
  
  return parseInt(result);
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
