/* class ya object a datatype define krne k liye */
export { }

interface userType {
    name: string,
    age: number,
    calculateMarks: () => string    //this function has to return a string
}

let user: userType = {
    name: "aman",
    age: 30,
    calculateMarks() {
        return "khanna"
    }
}


/* classes and interface */
class MyClass {

    name: string = "aman"

    marks: number

    constructor(marks:number) {
        this.marks = marks
    }

    getName():void {    //void matlab kuch return nhi krega yeh function

        console.log(this.marks);

    }
}

const a1 = new MyClass(10)
a1.getName()