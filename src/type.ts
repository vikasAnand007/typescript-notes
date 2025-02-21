type TBoolean = boolean;

type TUser = {
  name: string;
  age: number;
};

type TStudent = {
  name: string;
  class: number;
  id: string;
};

// ---------------------------
// .
// .
// UNION
// .
// .
// ----------------------------
type TUnion = TStudent | TUser; 
// this means type can be TUser or TStudent

const unionExample1: TUnion = {
  name: "Vikas",
  class: 1,
  id: "one",
};
const unionExample2: TUnion = {
  name: "Vikas",
  age: 28,
};

// assigning union to non-primitive types
type Ta = string | number; // Ta can be either string or number
let varTa: Ta = "abc" 
varTa = 20

// ---------------------------
// .
// .
// INTERSECTION
// .
// .
// ----------------------------

type TIntersection = TUser & TStudent; 
// this means type should include all the keys of TUser and TStudent

const intersectionExample1: TIntersection = {
  name: "Vikas",
  class: 1,
  id: "one",
  age: 2,
};

// assigning union to non-primitive types
type Ti = string & number // Ti should be both string and number at same time.
// since being of multiple type (string, number) AT SAME TIME is not possible so, type of Ti becomes "never"
// let varTi: Ti = "abc" // error**
// let varTi: Ti = 123 // error**
