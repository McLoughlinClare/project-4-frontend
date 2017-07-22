angular
  .module('physicsWars')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'index.html'
    })
    .state('studentProfile', {
      url: '/:id',
      templateUrl: 'js/views/student/profile.html',
      controller: 'StudentProfileCtrl as studentProfile'
    })
    .state('solutionsShow', {
      url: '/solutions/:id',
      templateUrl: 'js/views/solutions/show.html',
      controller: 'SolutionsShowCtrl as solutionsShow'
    })
    .state('solutionsEdit', {
      url: '/solutions/:id/edit',
      templateUrl: 'js/views/solutions/edit.html',
      controller: 'SolutionsEditCtrl as solutionsEdit'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/student_login.html',
      controller: 'AuthCtrl as auth'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/student_register.html',
      controller: 'AuthCtrl as auth'
    });

  $urlRouterProvider.otherwise('/');
}
