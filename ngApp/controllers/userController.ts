namespace birthdays.Controllers{
  const LOGIN = 'login';
  const REGISTER = 'register'

  export class UserController{
    public user;
    public username;
    public password;
    public regUsername;
    public regPassword;

      constructor(private userService, private $state) {}

    public login() {
      this.user = this.userService.loginOrRegister(this.username, this.password, LOGIN)
        .then(() => this.$state.go('home'));
    }
    public register() {
      this.user = this.userService.loginOrRegister(this.regUsername, this.regPassword, REGISTER)
        .then(() => this.$state.go('home'));
    }
  }

  export class LogoutController {

    constructor(private userService) {}

    public logout() {
      this.userService.logout();
    }
  }
}
