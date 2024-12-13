"use strict";
const ar1 = { dbId: 1223, email: "ar@gmail.com", userId: 1234,
    startTrial: () => {
        return "trial started";
    },
    getCoupon: (coup, off) => {
        return 10;
    }
};
ar1.email = "ar12@gm.com";
// ar1.dbId = 22
