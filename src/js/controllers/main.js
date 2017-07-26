angular
  .module('physicsWars')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['Teacher', 'Student', '$rootScope', '$state', '$auth', '$transitions', '$stateParams'];
function MainCtrl(Teacher, Student, $rootScope, $state, $auth, $transitions, $stateParams) {
  const vm = this;
  vm.isAuthenticated = $auth.isAuthenticated;

  $rootScope.$on('error', (e, err) => {
    vm.message = err.data.errors.join('; ');
    if(err.status === 401 && vm.pageName !== 'login') {
      vm.stateHasChanged = false;
      $state.go('login');
    }
  });

  const protectedStates = ['challengeIndex'];


  $transitions.onSuccess({}, (transition) => {
    vm.role = window.localStorage.getItem('role');
    if($auth.isAuthenticated()) {
      if(vm.role === 'teacher') vm.currentUser = Teacher.get($auth.getPayload());
      if(vm.role === 'student') vm.currentUser = Student.get($auth.getPayload());
    }

    if((!$auth.isAuthenticated() && protectedStates.includes(transition.$to().name))) {
      vm.message = 'You must be logged in to access this page.';
      return $state.go('login');
    }

    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;

    vm.pageName = transition.$to().name;
  });

  function logout() {
    $auth.logout();
    $state.go('home');
  }

  vm.logout = logout;
}
