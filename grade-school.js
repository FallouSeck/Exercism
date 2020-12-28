//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  result = {};

  roster() {
    const object = Object.values(this.result);
    for (const key in object) { object[key].sort() };
    return this.result;
  }

  add(name, gradeNumber) {
    const tempo = this.result[gradeNumber];
    if (tempo) {
      tempo.push(name);
      return;
    }
    this.result[gradeNumber] = [name];
  }

  grade(gradeNumber) {
    if (!this.result[gradeNumber]) { return [] };
      return this.result[gradeNumber].sort();
  }
}