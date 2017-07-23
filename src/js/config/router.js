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
      url: '/student/:id',
      templateUrl: 'js/views/student/profile.html',
      controller: 'StudentProfileCtrl as studentProfile'
    })
    .state('studentEdit', {
      url: '/student/:id/edit',
      templateUrl: 'js/views/student/edit.html',
      controller: 'StudentEditCtrl as studentEdit'
    })
  .state('teacherShow', {
    url: '/teacher/:id',
    templateUrl: 'js/views/teacher/show.html',
    controller: 'TeacherShowCtrl as teacherShow'
    })
    .state('teacherEdit', {
      url: '/teacher/:id/edit',
      templateUrl: 'js/views/teacher/edit.html',
      controller: 'TeacherEditCtrl as teacherEdit'
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
    .state('solutionsNew', {
      url: '/solutions/new',
      templateUrl: 'js/views/solutions/new.html',
      controller: 'SolutionsNewCtrl as solutionsNew'
    })
      .state('challengeIndex', {
        url: '/challenge',
        templateUrl: 'js/views/challenge/index.html',
        controller: 'ChallengeIndexCtrl as challengeIndex'
      })
      .state('challengeNew', {
        url: '/challenge/new',
        templateUrl: 'js/views/challenge/new.html',
        controller: 'ChallengeNewCtrl as challengeNew'
      })
      .state('challengeShow', {
        url: '/challenge/:id',
        templateUrl: 'js/views/challenge/show.html',
        controller: 'ChallengeShowCtrl as challengeShow'
      })
      .state('challengeEdit', {
        url: '/challenge/:id/edit',
        templateUrl: 'js/views/challenge/edit.html',
        controller: 'ChallengeEditCtrl as challengeEdit'
      })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/student_login.html',
      controller: 'AuthCtrl as auth'
    })
    .state('register', {
      url: '/student-register',
      templateUrl: 'js/views/auth/student_register.html',
      controller: 'AuthCtrl as auth'
    })
    .state('teacherlogin', {
      url: '/teacher-login',
      templateUrl: 'js/views/auth/teacher_login.html',
      controller: 'TeacherAuthCtrl as teacherauth'
    })
    .state('teacherregister', {
      url: '/teacher-register',
      templateUrl: 'js/views/auth/teacher_register.html',
      controller: 'TeacherAuthCtrl as teacherauth'
    });

  $urlRouterProvider.otherwise('/');
}
