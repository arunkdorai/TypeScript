interface Iperson {
    fname: string;
    lname: string;
    getFullname(): string;
}

let obj: Iperson = {
    fname: "Hello",
    lname: "World!",
    getFullname(): string {
        return this.fname + " " + this.lname;
    }
}

console.log(obj.getFullname())