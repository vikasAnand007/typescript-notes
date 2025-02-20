interface Iuser {
  name: string;
  age: number;
  address: string;
  education: string;
}

type AgeType = Pick<Iuser, "age">;

const userData: Iuser = {
  name: "Vikas",
  age: 28,
  address: "Jaipur",
  education: "Engineering",
};

type UserSubset = Pick<Iuser, "name" | "age">;

function printNameAndAge(userSubset: UserSubset) {
  console.log(`${userSubset.name} is ${userSubset.age} years old.`);
}

printNameAndAge({ name: userData.name, age: userData.age });
