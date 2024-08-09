interface AuthValue {
    wifi: boolean;
    login: boolean;
    admin: boolean;
}

const authValue: AuthValue = {
    wifi: true,
    login: true,
    admin: true
}

function authCheck(): void {
    if(!authValue.wifi) {
        console.log('wifiに接続してください');
        return;
    } 
    if(!authValue.login) {
        console.log('ログインしてください');
        return;
    }
    if(!authValue.admin) {
        console.log('権限がありません');
        return;
    }

    console.log('全ての認証をパスしました');

}

authCheck();