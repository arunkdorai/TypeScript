"use strict";
let score = 45;
score = 55;
score = "out";
let arun = {
    name: "arun", id: 123
};
arun = { username: "ar", id: 123 };
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`Db id is: ${id}`)
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = ["1", "2", "3", 4, true];
let seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
