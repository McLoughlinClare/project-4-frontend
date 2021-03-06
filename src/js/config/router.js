angular
  .module('physicsWars')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/statics/home.html',
      controller: 'SchoolsLeagueCtrl as schoolsLeague'
    })
    .state('studentsShow', {
      url: '/students/:id',
      templateUrl: 'js/views/student/profile.html',
      controller: 'StudentsShowCtrl as studentShow'
    })
    // .state('studentsEdit', {
    //   url: '/students/:id/edit',
    //   templateUrl: 'js/views/student/edit.html',
    //   controller: 'StudentEditCtrl as studentEdit'
    // })
  .state('teachersShow', {
    url: '/teachers/:id',
    templateUrl: 'js/views/teacher/profile.html',
    controller: 'TeachersShowCtrl as teachersShow'
    })
    .state('teachersEdit', {
      url: '/teachers/:id/edit',
      templateUrl: 'js/views/teacher/edit.html',
      controller: 'TeachersEditCtrl as teacherEdit'
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
      .state('challengesIndex', {
        url: '/challenges',
        templateUrl: 'js/views/challenge/index.html',
        controller: 'ChallengesIndexCtrl as challengesIndex'
      })
      .state('challengesNew', {
        url: '/challenges/new',
        templateUrl: 'js/views/challenge/new.html',
        controller: 'ChallengesNewCtrl as challengesNew'
      })
      .state('challengesShow', {
        url: '/challenges/:id',
        templateUrl: 'js/views/challenge/show.html',
        controller: 'ChallengesShowCtrl as challengesShow'
      })
      .state('challengesEdit', {
        url: '/challenges/:id/edit',
        templateUrl: 'js/views/challenge/edit.html',
        controller: 'ChallengesEditCtrl as challengesEdit'
      })
      .state('topicsShow', {
        url: '/topics/:id',
        templateUrl: 'js/views/topics/show.html',
        controller: 'TopicsShowCtrl as topicsShow'
      })
      .state('topicIndex', {
        url: '/topics',
        templateUrl: 'js/views/topics/index.html',
        controller: 'TopicsIndexCtrl as topicsIndex'
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
