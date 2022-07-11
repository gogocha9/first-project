// Callback Hell example
class UserStorage {
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async loginUser(id, password) {
        await this.delay(2000);
        if((id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')) {
                return id;
        } else {
            throw 'not found';
        }
    }

    async getRoles(user) {
        await this.delay(1000);
        if(user === 'ellie') {
            return {name: 'ellie', role: 'admin'};
        } else {
            throw 'no access';
        }
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

async function findUserRoles() {
    const user = await userStorage.loginUser(id, password);
    const userInfo = await userStorage.getRoles(user);
    return alert(`Hello ${userInfo.name}, you have a ${userInfo.role} role`);
}

findUserRoles().then().catch(console.log);