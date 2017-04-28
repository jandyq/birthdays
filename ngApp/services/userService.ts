namespace birthdays.Services {

  class UserService {
    private userData;
    private previousState;
    private USER_RESOURCE = this.$resource('/api/v1/users/:action');

    constructor(private $resource, private $window, private $state) {}

    public loginOrRegister(username, password, action) {
      this.userData = this.USER_RESOURCE.save({action: action}, {username: username, password: password})
      .$promise.then((data)=> {
        if(data.token) {
        this.$window.sessionStrorage.setItem('token', data.token);
        }
      if (data.role) {
        this.$window.sessionStrorage.setItem('role', data.role);
      }
    });
    return this.userData;
    }

    public getUserRole() {
      return this.$window.sessionStrorage.role;
    }
    public logout() {
      this.userData = null;
      this.$window.sessionStrorage.removeItem('token');
      this.$state.go('home');
    }

    public getUserData() {
      console.log(this.$window.sessionStrorage.token);
      return this.$window.sessionStrorage.token;
    }

    public getPreviousState() {
      return this.previousState;
    }
    public setPreviousState(state) {
      this.previousState = state;
    }
  }
  angular.module('birthdays').service('userService', UserService);
}
