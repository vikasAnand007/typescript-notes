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