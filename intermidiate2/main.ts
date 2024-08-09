type User18 = {
    name: string;
    email: string;
    age: number;
}

const user: User18 = { name: "kitagawa", email: "keiko@google.com", age: 27};

function user18(user: User18) {
    const selfAge = user.age >= 18 ? `I am an Adult, ${user.age} years old` : 'I am young';
    console.log(selfAge);
}

user18(user);