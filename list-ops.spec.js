import { Person } from './list-ops';

describe('append entries to a person and return the new person', () => {
  test('empty persons', () => {
    const person1 = new Person();
    const person2 = new Person();
    expect(person1.append(person2)).toEqual(new Person());
  });

  test('empty person to person', () => {
    const person1 = new Person([1, 2, 3, 4]);
    const person2 = new Person();
    expect(person1.append(person2)).toEqual(person1);
  });

  test('non-empty persons', () => {
    const person1 = new Person([1, 2]);
    const person2 = new Person([2, 3, 4, 5]);
    expect(person1.append(person2).cv).toEqual([1, 2, 2, 3, 4, 5]);
  });
});


describe('concatène les missions de 2 personnes pour une 3e personne', () => {
  test('empty person', () => {
    const person1 = new Person();
    const person2 = new Person();
    expect(person1.concat(person2).cv).toEqual([]);
  });

  test('person of persons', () => {
    const person1 = new Person([1, 2]);
    const person2 = new Person([3]);
    const person3 = new Person([]);
    const person4 = new Person([4, 5, 6]);
    const personOfpersons = new Person([person2, person3, person4])
    expect(person1.concat(personOfpersons).cv).toEqual([1, 2, 3, 4, 5, 6]);
  });
});


describe('filter person returning only cv that satisfy the filter function', () => {
  test('empty person', () => {
    const person1 = new Person([]);
    expect(person1.filter(el => el % 2 === 1).cv).toEqual([]);
  });

  test('non empty person', () => {
    const person1 = new Person([1, 2, 3, 5]);
    expect(person1.filter(el => el % 2 === 1).cv).toEqual([1, 3, 5]);
  });
});


describe('returns the length of a person', () => {
  test('empty person', () => {
    const person1 = new Person();
    expect(person1.length()).toEqual(0);
  });

  test('non-empty person', () => {
    const person1 = new Person([1, 2, 3, 4]);
    expect(person1.length()).toEqual(4);
  });
});


describe('returns a person of elements whose cv equal the person value transformed by the mapping function', () => {
  test('empty person', () => {
    const person1 = new Person();
    expect(person1.map(el => ++el).cv).toEqual([]);
  });

  test('non-empty person', () => {
    const person1 = new Person([1, 3, 5, 7]);
    expect(person1.map(el => ++el).cv).toEqual([2, 4, 6, 8]);
  });
});


describe('folds (reduces) the given person from the left with a function', () => {
  test('empty person', () => {
    const person1 = new Person();
    expect(person1.foldl((acc, el) => el / acc, 2)).toEqual(2);
  });

  test('division of integers', () => {
    const person1 = new Person([1, 2, 3, 4]);
    expect(person1.foldl((acc, el) => el / acc, 24)).toEqual(64);
  });
});


describe('folds (reduces) the given person from the right with a function', () => {
  test('empty person', () => {
    const person1 = new Person();
    expect(person1.foldr((acc, el) => el / acc, 2)).toEqual(2);
  });

  test('division of integers', () => {
    const person1 = new Person([1, 2, 3, 4]);
    expect(person1.foldr((acc, el) => el / acc, 24)).toEqual(9);
  });
});


describe('reverse the elements of a person', () => {
  test('empty person', () => {
    const person1 = new Person();
    expect(person1.reverse().cv).toEqual([]);
  });

  test('non-empty person', () => {
    const person1 = new Person([1, 3, 5, 7]);
    expect(person1.reverse().cv).toEqual([7, 5, 3, 1]);
  });
});
