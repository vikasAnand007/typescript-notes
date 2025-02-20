// Suppose there is a usecase in which we want to store data of multiple users based on their unique userId.

// For example
const userCollection = {
  unique_id_1: {
    name: "Name1",
    age: 1,
  },
  unique_id_ab: {
    name: "NameAB",
    age: 2,
  },
  unique_id_1A: {
    name: "Name1A",
    age: 3,
  },
};

// So,  to type such data structure we can use following
interface Idata {
  name: string;
  age: number;
}

// Using general way ------
interface Icollection {
  [key: string]: Idata;
}

const collection1: Icollection = {
  unique_id_1: {
    name: "Name1",
    age: 1,
  },
  unique_id_ab: {
    name: "NameAB",
    age: 2,
  },
  unique_id_1A: {
    name: "Name1A",
    age: 3,
  },
};

// Using RECORD ------ [NOTE: Record is a concept of Typescript]
// the first argument to "Record" is type of key and second argument is type of value.
type TCollection = Record<string, Idata>;

const collection2: TCollection = {
  unique_id_1: {
    name: "Name1",
    age: 1,
  },
  unique_id_ab: {
    name: "NameAB",
    age: 2,
  },
  unique_id_1A: {
    name: "Name1A",
    age: 3,
  },
};

// Using MAP ------ [NOTE: Map is a concept of Javascript]
// we can create similar object like above (powered by Map), and assign type also to it.
const collection3 = new Map<string, Idata>();
collection3.set("unique_id_1", {
  name: "Name1",
  age: 1,
});
collection3.set("unique_id_ab", {
  name: "NameAB",
  age: 2,
});
collection3.set("unique_id_1A", {
  name: "Name1A",
  age: 3,
});
