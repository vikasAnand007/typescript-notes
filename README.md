## Typescript
TypeScript is a programming language developed and maintained by Microsoft.

It is a strict `syntactical superset` of JavaScript and adds optional static typing to the language.

Typescript code never runs in your browser. Your browser can only understand `javascript`.

1.  Javascript is the runtime language (the thing that actually runs in your browser/nodejs runtime)

2.  Typescript is something that compiles down to javascript

3.  When typescript is compiled down to javascript, you get `type checking` (similar to C++). If there is an error, the conversion to Javascript fails.

## Typescript compiler
`tsc` is the official typescript compiler that you can use to convert `Typescript` code into `Javascript`

There are many other famous compilers/transpilers for converting Typescript to Javascript. Some famous ones are -

1.  esbuild

2.  swc
## tsconfig file

The `tsconfig` file has a bunch of options that you can change to change the compilation process.

 1. **target**: specifies the ECMAScript target version to which the TypeScript compiler will compile the TypeScript code.
 2. **rootDir**: Where should the compiler look for `.ts` files. Good practise is for this to be the `src` folder
 3. **outDir**: Where should the compiler look for spit out the `.js` files.
 4. **removeComments**: Weather or not to include comments in the final `js` file.
 5. etc...

## Project setup
Initialise node project

    npm init --y
Install typescript

    npm install typescript -D
Initialise ts-config and TS compiler.

    npx tsc --init
In tsconfig.json file, Configure "rootDir", "outDir" and other configurations as per need.

Compile

    npm tsc -b 
## Primitive and Non-primitive types
Primitive type are basic types like `string`, `number`, `boolean`, `null`, `undefined`. And Non-primitive types are derived from primitive types, like typing an object or an array.

**never** : The `never` type represents a value that never occurs. t is used when a variable can never have a valid value.

## Type
`Type` can be used to assign type as both primitive and non primitive.

**Union `|`**: A union type allows a value to be any one of given types. It can be assigned to both primitive and non primitive.

**Intersection `&`**: An intersection type combines multiple types into one, meaning a value must have all the specified types. It is generally assigned to non-primitive types. Assigning intersection to primitive type gives never, because a singe variable cannot be of multiple type at the same time.

[Demo](https://github.com/vikasAnand007/typescript-notes/blob/master/src/type.ts)

## Interface
Interface can be used to assign type as non-primitive.
[Demo](https://github.com/vikasAnand007/typescript-notes/blob/master/src/interface.ts)

**Interface with classes**: An interface defines a contract for a class. It does not contain implementations—just method and property definitions. A class can implement an interface, meaning it must provide implementations for all the methods and properties in that interface.

NOTE: A class can implement multiple interfaces but can extend only one class.

**Abstract class**:  An abstract class is a base class that cannot be instantiated directly.  It can have both abstract methods (without implementation) and concrete methods (with implementation).

**Difference in Interface and Abstract class**
|Feature| Interface 📝 | Abstract Class 🔥 |
|--|--|--|
| Keypoints | No implementation in an interface, only structure. A class can implement multiple interfaces. Optional properties can be defined using `?`. | Cannot be instantiated directly. Can have both abstract and concrete methods. Must be extended by a subclass, which must implement all abstract methods. |
|Can have properties? |✅ Yes (only declarations) | ✅ Yes (with values)|
|Can have methods? |✅ Yes (only signatures) | ✅ Yes (abstract & concrete)|
|Can have constructors? |❌ No | ✅ Yes|
|Can have private members? |❌ No (only public) | ✅ Yes|
|Can be instantiated? |❌ No | ❌ No|
|Supports multiple inheritance? |✅ Yes (multiple interfaces) | ❌ No (only one abstract class)|


## Pick
It can be used if we want to create a subset of from an object interface or type
[Demo](https://github.com/vikasAnand007/typescript-notes/blob/master/src/pick.ts)
## Partial
This an be used to make all the properties of an interface of type optional
[Demo](https://github.com/vikasAnand007/typescript-notes/blob/master/src/partial.ts)
## Readonly
When we define an object/array in Javascript or Typescript, then even if it is initialised with `const` , It's properties or value at some index can be changed.
To avoid this issue, we can use `Readonly`
[Demo](https://github.com/vikasAnand007/typescript-notes/blob/master/src/readonly.ts)

## Record and Map
Suppose there is a use case in which we want to store data of multiple users based on their unique userId.
For example ::

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
In such cases, we can use **Record** or **Map**. 
[Demo](https://github.com/vikasAnand007/typescript-notes/blob/master/src/record.ts)

## Exclude
As the name suggest, "Exclude" is used to exclude some literals from a set of litrals.
[Demo](https://github.com/vikasAnand007/typescript-notes/blob/master/src/exclude.ts)

## Infering Types from zod
When we use [zod](https://zod.dev/) validator. We can infer/extract Types from a zod schema.
[Demo](https://github.com/vikasAnand007/typescript-notes/blob/master/src/zod.ts)