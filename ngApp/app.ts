namespace birthdays {

    angular.module('birthdays', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: birthdays.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('private', {
              url: '/private',
              template: '<h3> Please login </h3>',
              data: {requiresAuthentication: true
              }
          })
            .state('login', {
              url: '/login',
              templateUrl: '/ngApp/views/login.html',
              controller: birthdays.Controllers.LoginController,
              controllerAs: 'controller',
              data: {
                isLoggedIn: true
              }
          })
            .state('pres', {
              url: '/pres',
              template: '<h3>SuperUser</h3>',
              data: {
                isLoggedIn: true,
                privileges: 'P'
              }
            })
            .state('admin', {
              url: '/admin',
              template: '<h3>AdminUser</h3>',
              data: {
                isLoggedIn: true,
                privileges: 'A'
              }
            })
            .state('ageGroups', {
                url: '/ageGroups',
                templateUrl: '/ngApp/views/ageGroups.html',
                controller: birthdays.Controllers.AgeGroupController,
                controllerAs: 'controller'
            })
            .state('nursery', {
                url: '/nursery',
                templateUrl: '/ngApp/views/nursery.html',
                controller: birthdays.Controllers.NurseryController,
                controllerAs: 'controller'
            })
            .state('three', {
                url: '/three',
                templateUrl: '/ngApp/views/three.html',
                controller: birthdays.Controllers.ThreeController,
                controllerAs: 'controller'
            })
            .state('four', {
                url: '/four',
                templateUrl: '/ngApp/views/four.html',
                controller: birthdays.Controllers.FourController,
                controllerAs: 'controller'
            })
            .state('five', {
                url: '/five',
                templateUrl: '/ngApp/views/five.html',
                controller: birthdays.Controllers.FiveController,
                controllerAs: 'controller'
            })
            .state('six', {
                url: '/six',
                templateUrl: '/ngApp/views/six.html',
                controller: birthdays.Controllers.SixController,
                controllerAs: 'controller'
            })
            .state('seven', {
                url: '/seven',
                templateUrl: '/ngApp/views/seven.html',
                controller: birthdays.Controllers.SevenController,
                controllerAs: 'controller'
            })
            .state('eight', {
                url: '/eight',
                templateUrl: '/ngApp/views/eight.html',
                controller: birthdays.Controllers.EightController,
                controllerAs: 'controller'
            })
            .state('nine', {
                url: '/nine',
                templateUrl: '/ngApp/views/nine.html',
                controller: birthdays.Controllers.NineController,
                controllerAs: 'controller'
            })
            .state('ten', {
                url: '/ten',
                templateUrl: '/ngApp/views/ten.html',
                controller: birthdays.Controllers.TenController,
                controllerAs: 'controller'
            })
            .state('eleven', {
                url: '/eleven',
                templateUrl: '/ngApp/views/eleven.html',
                controller: birthdays.Controllers.ElevenController,
                controllerAs: 'controller'

            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

angular.module('birthdays').run(($rootScope, $state, userService, $window) => {
  $rootScope.$on('$stateChangeStart', (e, state) => {
    if($state.current.name) {
      $window.sessionStorage.setItem('previousState', $state.current.name);
    }
  });
  $rootScope.$on('$stateChangeStart', (e, state) => {
    if (state.data && state.data.isLoggedIn) {
      if (!userService.getUserData()) {
      e.preventDefault();
      $state.go('login');//is this the right site to go to?
    } else if (!validateUserPrivileges(userService.getUserRole(), state.data.privileges)) {
    e.preventDefault();
    $state.go($window.sessionStorage.priviousState);
    }
  }
  });
});
function validateUserPrivileges(userRole, requiredRole){
  return assignRoleValue(userRole) <= assignRoleValue(requiredRole);
}

function assignRoleValue(role) {
  switch(role) {
    case 'P':
      return 1;
    case 'A':
      return 2;
    default:
      return 3;
  }
}

}
