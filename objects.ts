//har key ka apna type hoga
const user = {
    name: "aman",   //since humne ise default value string di h toh yeh autodetection se ise string hi type assign krdega
    age: 30,
    address: "Delhi"
}

//new value add nhi kr skte but update kr skte h given unka type same ho

/* declaring object types */
//to declare object types, we use a special thing known as INTERFACE

interface studentTyped {
    name: string,
    rollNo: number,
    isPassed: boolean,
    prize:any   //koi b datatype accept krlo
}

const student: studentTyped = {
    name: "aman",
    rollNo: 10,
    isPassed: true,
    prize: "nobel"
}

student.prize = 10
console.log(student);
