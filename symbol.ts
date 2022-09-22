export {}
// a primitive data type in typescript
// symbols generate a unique id

let s1 = Symbol("symbol 1")

let data = {
    [s1]: "some data"
}

console.log(data);