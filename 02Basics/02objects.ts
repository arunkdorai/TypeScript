const User = {
    name: "arun",
    email: "arun@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}

createUser({name: "arun", isPaid: false})

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}

export {}