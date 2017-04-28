namespace birthdays.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
    }


    export class LoginController {
      private username;
      private password;

      constructor(private loginService, private $state) {}

      public login() {
        this.loginService.login(this.username, this.password);
        if (this.loginService.isLoggedIn()) {
          this.$state.go('home');
        }  else {
              this.password = ' ';
            }
          }

        }


      


        export class ThreeController {

        }
        export class FourController {

        }
        export class FiveController {

        }
        export class SixController {

        }
        export class SevenController {

        }
        export class EightController {

        }
        export class NineController {

        }
        export class TenController {

        }
        export class ElevenController {

        }
    }
