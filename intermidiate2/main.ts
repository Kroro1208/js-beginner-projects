type User18 = {
    name: string;
    email: string;
    age: number;
}

const user: User18 = { name: "kitagawa", email: "keiko@google.com", age: 27};

function user18(user: User18) {
    const { age } = user;
    const selfAge = age >= 18 ? "an adult" : "a young";
    console.log(`I am ${selfAge}, ${age} years old.`);
}

user18(user);