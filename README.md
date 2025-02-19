## Typescript
Initialise node project

    npm init --y
Install typescript

    npm install typescript -D
Initialise ts-config and TS compiler.
*Note there are multiple TS compiler like tsc, sec, esbuild etc. We can use any one of them.*

    npx tsc --init
In tsconfig.json file, Configure "rootDir", "outDir" and other configurations as per need.

Compile

    npm tsc -b 
## Pick
It can be used if we want to create a subset of from an object interface or type

    interface Iuser {
      name: string;
      age: number;
      address: string;
      education: string;
    }
    
    type AgeType = Pick<Iuser, "age">;
    
    const user1: Iuser = {
      name: "Vikas",
      age: 28,
      address: "Jaipur",
      education: "Engineering",
    };
    
    type UserSubset = Pick<Iuser, "name" | "age">;
    
    function printNameAndAge(userSubset: UserSubset) {
      console.log(`${userSubset.name} is ${userSubset.age} years old.`);
    }
    
    printNameAndAge({ name: user1.name, age: user1.age }); 

## Partial
This an be used to make all the properties of an interface of type optional

    interface Iuser {
      name: string;
      age: number;
      address: string;
    }
    
    // If we want to make another type with all the properties optional
    
    // ❌ not recommended 
    type OptionalUser1 = {
      name?: string;
      age?: number;
      address?: string;
    };
    
    // ✅ recommended 
    type OptionalUser2 = Partial<Iuser>;
## Readonly
When we define an object/array in Javascript or Typescript, then even if it is initialised with `const` , It's properties or value at some index can be changed.
To avoid this issue, we can use `Readonly`

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

