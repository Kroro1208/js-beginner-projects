type User = {
    name: string;
    email: string;
    age: string;
    isMen: boolean;
}

const user1: User = { name: "kitagawa", email: "keiko@google.com", age: "27", isMen: false };
const user2 : User= { name: "nagasawa", email: "masami@google.com", age: "25", isMen: false };
const user3: User = { name: "yamashita", email: "tomohisa@google.com", age: "35", isMen: true };

const users = [ user1, user2, user3];

function userInfoTabel(users: User[]) {
    console.table(users);
}

function userSelfInfo(user: User) {
    console.log(`I am ${user.name}, ${user.age} years old`);
}


userInfoTabel(users);
users.forEach(userSelfInfo);