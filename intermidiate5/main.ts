enum UserStaus {
    ACTIVE = 1,
    INACTIVE = 2,
    PENDING  =3,
}

function getStatus(statusCode: UserStaus): void {
    switch(statusCode) {
        case UserStaus.ACTIVE:
            console.log("ユーザはアクティブ状態です");
            break;
        case UserStaus.INACTIVE:
            console.log("ユーザーは非アクティブです");
            break;
        case UserStaus.PENDING:
            console.log("ユーザーは保留中です");
            break;
        default: break;
    }
}

getStatus(UserStaus.ACTIVE);
getStatus(UserStaus.INACTIVE);
getStatus(UserStaus.PENDING);