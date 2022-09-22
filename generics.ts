//jab hume type nhi pta hota but refernce pta hota hai
//eg. jo input ka type voh hi output a ka type
//jaha jaha b same generic use hoga waha waha ka type same hojaega

function users<T>(data: T): T {     /* agar input T ha toh output b T hai i.e. agar input string h toh output b string h */
    return data
}

console.log(users("aman"))
console.log(users(10))
console.log(users(true))
console.log(users(["aman", "guddu"]))

