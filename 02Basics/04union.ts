let score: number | string = 45

score = 55

score = "out"

type Usernew = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let arun: Usernew | Admin = {
    name: "arun", id: 123
}

arun = {username: "ar", id: 123}

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`Db id is: ${id}`)
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string){    
    if(typeof id === "string") {
        id.toLowerCase()
    } else {
        id + 2
    }    
}

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", "3", 4, true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"

