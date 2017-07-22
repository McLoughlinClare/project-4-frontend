angular
  .module('physicsWars')
  .controller('AuthCtrl', AuthCtrl);

AuthCtrl.$inject = ['$auth', '$state'];
function AuthCtrl($auth, $state) {
  const vm = this;

  function register() {
    $auth.signup(vm.student)
      .then(() => $state.go('student_login'));
  }

  vm.register = register;

  function login() {
    $auth.login(vm.credentials)
      .then(() => $state.go('/'));
  }

  vm.login = login;
}
