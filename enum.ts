//defines a set of outputs
//treat this as an array
enum Days {

    monday, tuesday, wednesday

}  /* set of values */

let today: Days;

today = 1      /* 1 means index 1 i.e. tuesday */
today = Days.wednesday


enum Months {
    jan = "jan",
    feb = "feb",
    mar = "mar"
}

function months(month:Months) {
    console.log(month);
}

console.log(months(Months.feb))
