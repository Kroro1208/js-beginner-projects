enum UserRole {
    Member = "member",
    Guest = "Guest"
}

function getPrice(price: number, role: UserRole) {
    const taxRate = 1.1
    const taxPrice = price * taxRate;
    switch(role) {
        case UserRole.Member: {
            const fee = 500;
            return Math.round(taxPrice - fee);
        }
        case UserRole.Guest:
            return Math.round(taxPrice);
        default: throw new Error('権限がありません');
    }
}

try {
    const memberPrice = getPrice(1500, UserRole.Member);
    const guestPrice = getPrice(1500, UserRole.Guest);
    
    console.log(`メンバー価格は${memberPrice}円です`);
    console.log(`ゲスト価格は${guestPrice}円です`)
} catch (error) {
    if(error instanceof Error) {
        console.log(error.message);
    } else {
        console.log('何らかのエラーが発生しました');
    }
}

