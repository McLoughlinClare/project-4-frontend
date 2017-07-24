angular
  .module('physicsWars')
  .controller('TopicsShowCtrl', TopicsShowCtrl)
  .controller('TopicsIndexCtrl', TopicsIndexCtrl);

  TopicsIndexCtrl.$inject = ['Topic'];
  function TopicsIndexCtrl(Topic) {
    const vm = this;

    vm.all = Topic.query();
  }

  TopicsNewCtrl.$inject = ['Topic', 'Student', '$state'];
  function TopicsNewCtrl(Topic, Student, $state) {
    const vm = this;
    vm.topic = {};
    vm.users = Student.query();

    function topicsCreate() {
      Topic
        .save(vm.topic)
        .$promise
        .then(() => $state.go('topicsIndex'));
    }

    vm.create = topicsCreate;
  }

TopicsShowCtrl.$inject = ['Topic', 'Challenge', '$stateParams', '$state'];
function TopicsShowCtrl(Topic, Challenge,  $stateParams, $state) {
  const vm = this;

  vm.all = Topic.query();


  vm.topic = Topic.get($stateParams);


  function topicsDelete() {
    vm.topic
      .$remove()
      .then(() => $state.go('topicsIndex'));
  }

  vm.delete = topicsDelete;

  function topicsUpdate() {
    Topic
      .update({ id: vm.topic.id }, vm.topic);
  }
}
