namespace birthdays.Services {

    class LoginService {
      private users = [
        {username: 'Admin', password: '123456Go'},
        {username: 'President', password: '123456'}
    ];

    private loggedIn;

    public login(username, password) {
      for(let user of this.users) {
        if(user.username === username && user.password === password) {
          this.loggedIn = true;
          return;
        }
      }
      this.loggedIn = false;
    }

    public isLoggedIn() {
      return this.loggedIn;
    }
}

    angular.module('birthdays').service('loginService', LoginService);
}
//ask Nick if I should 86 this page or combine with userService
