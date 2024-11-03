import { extendObservable } from 'mobx';

class UserStore {
    constructor() {
        extendObservable(this, {
            loading: true,
            isLoggedIn: false,
            email: '',
            userId: '-2',
        })
    }
}
export default new UserStore();