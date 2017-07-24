angular
  .module('physicsWars')
  .controller('AuthCtrl', AuthCtrl)
  .controller('TeacherAuthCtrl', TeacherAuthCtrl);

AuthCtrl.$inject = ['$auth', '$state'];
function AuthCtrl($auth, $state) {
  const vm = this;

  function register() {
    $auth.signup(vm.student)
      .then(() => $state.go('login'));
  }

  vm.register = register;

  function login() {
    $auth.login(vm.credentials)
      .then(() => $state.go('challengeIndex'));
  }

  vm.login = login;
}

TeacherAuthCtrl.$inject = ['$auth', '$state'];
function TeacherAuthCtrl($auth, $state) {
  const vm = this;

  function register() {
    $auth.signup(vm.teacher)
      .then(() => $state.go('teacherlogin'));
  }

  vm.register = register;

  function login() {
    $auth.login(vm.credentials)
      .then(() => $state.go('challengeIndex'));
  }

  vm.login = login;
}
