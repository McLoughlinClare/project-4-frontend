angular
  .module('physicsWars')
  .controller('TopicsShowCtrl', TopicsShowCtrl)
  .controller('TopicsIndexCtrl', TopicsIndexCtrl);

  TopicsIndexCtrl.$inject = ['Topic'];
  function TopicsIndexCtrl(Topic) {
    const vm = this;

    vm.all = Topic.query();
  }


TopicsShowCtrl.$inject = ['Topic', 'Student', '$stateParams', '$state', '$auth'];
function TopicsShowCtrl(Topic, Student, $stateParams, $state, $auth) {
  const vm = this;
  vm.all = Topic.query();

  vm.role = window.localStorage.getItem('role');
  if(vm.role === 'student') vm.currentUser = Student.get({ id: $auth.getPayload().id });


  vm.topic = Topic.get($stateParams);

  function isAnswered(challenge) {
    return vm.currentUser.solutions.find((solution) => {
      return solution.challenge.id === challenge.id;
    });
  }

  vm.isAnswered = isAnswered;

}
