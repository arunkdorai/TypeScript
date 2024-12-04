interface User6 {
    readonly dbId: number
    email: string,
    userId:number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string,
    getCoupon(couponName: string, value:number): number
}

const ar1: User6 = {dbId:1223, email: "ar@gmail.com", userId: 1234,
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (coup: "c10", off: 10) => {
        return 10
    }
}
ar1.email = "ar12@gm.com"
// ar1.dbId = 22