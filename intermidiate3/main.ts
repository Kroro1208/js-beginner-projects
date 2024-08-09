const orders: number[] = [500, 30, 99, 15, 223];

const sumOrders: number = orders.reduce((acc, cur) => acc + cur, 0);
const withTax: number[] = orders.map(num => num * 1.1);
const overHundred: number[] = orders.filter(num => num >= 100);

console.log(sumOrders);
console.log(withTax);
console.log(overHundred);