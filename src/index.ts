// Approach 1 ------------
interface Iuser1 {
  readonly name: string;
  readonly age: number;
}

const user1: Iuser1 = {
  name: "Vikas",
  age: 28,
};

// Approach 2 ------------
interface Iuser2 {
  name: string;
  age: number;
}

const user2: Readonly<Iuser2> = {
  name: "Vikas",
  age: 28,
};

// Approach 3 ------------
type Tuser3 = Readonly<{
  name: string;
  age: number;
}>;

const user3: Tuser3 = {
  name: "Vikas",
  age: 28,
};
