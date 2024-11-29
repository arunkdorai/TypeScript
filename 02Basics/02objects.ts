const User = {
    name: "arun",
    email: "arun@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

let newUser = {name: "arun", isPaid: false, email: "arun@gmail.com"}

createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser1(user: User): User{
    return {name: "", email: "", isActive: true}
}

createUser1({name: "", email: "", isActive: true}) 

export {}