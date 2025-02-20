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