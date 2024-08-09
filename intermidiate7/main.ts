interface Product {
    price: number;
    quantity: number;
}

interface Options {
    ship?: number;
    discount?: number;
}

const products: Product[] = [
    { price: 2500, quantity: 2 },
    { price: 1500, quantity: 5 },
    { price: 5000, quantity: 1 },
];

const TAX_RATE = 1.1;
const SHIPPING = 500;

function calculateTotal(products: Product[], options: Options = {}): number {
    const { ship = SHIPPING, discount = 1 } = options;
    if(products == null || products.length === 0) return 0;

    let total = products.reduce((acc, product) => {
        return acc + product.price * product.quantity * discount;
    }, 0);

    total *= discount;
    total *= TAX_RATE;


    if(ship !== 0) {
        total += ship;
    }

    return Math.round(total);

}

calculateTotal(products, {ship: 0});
calculateTotal(products, {discount: 0.45});
calculateTotal(products, {ship: 500});