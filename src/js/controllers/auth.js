angular
  .module('physicsWars')
  .controller('AuthCtrl', AuthCtrl)
  .controller('TeacherAuthCtrl', TeacherAuthCtrl);
  // .controller('AuthSchoolsCtrl', AuthSchoolsCtrl);

AuthCtrl.$inject = ['School','$auth', '$state'];
function AuthCtrl(School, $auth, $state) {
  const vm = this;
  vm.student = {};
  vm.credentials = {};
  vm.student.role = 'student';
  vm.credentials.role = 'student';
  vm.all = School.query();

  function register() {
    $auth.signup(vm.student)
      .then(() => $state.go('login'));
  }

  vm.register = register;

  function login() {
    $auth.login(vm.credentials)
      .then(() => {
      window.localStorage.setItem('role', 'student');
      $state.go('topicIndex');
    });
  }

  vm.login = login;
}


//a controller to show the schools signed up when a teacher or student is registering.
// AuthSchoolsCtrl.$inject = ['School'];
// function AuthSchoolsCtrl(School) {
//   const vm = this;
//
//   vm.all = School.query();
// }

TeacherAuthCtrl.$inject = ['School','$auth', '$state'];
function TeacherAuthCtrl(School, $auth, $state) {
  const vm = this;
  vm.teacher = {};
  vm.teacher.role = 'teacher';
  vm.credentials = {};
  vm.credentials.role = 'teacher';
  vm.all = School.query();

  function register() {
    $auth.signup(vm.teacher)
      .then(() => $state.go('teacherlogin'));
  }

  vm.register = register;

  function login() {
    $auth.login(vm.credentials)
      .then(() => {
      window.localStorage.setItem('role', 'teacher');
      $state.go('topicIndex');
    });
  }

  vm.login = login;
}
