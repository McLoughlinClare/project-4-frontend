angular
  .module('physicsWars')
  .controller('TopicsShowCtrl', TopicsShowCtrl)
  .controller('TopicsIndexCtrl', TopicsIndexCtrl);

  TopicsIndexCtrl.$inject = ['Topic'];
  function TopicsIndexCtrl(Topic) {
    const vm = this;

    vm.all = Topic.query();
  }


TopicsShowCtrl.$inject = ['Topic', '$stateParams', '$state'];
function TopicsShowCtrl(Topic, $stateParams, $state) {
  const vm = this;

  vm.all = Topic.query();


  vm.topic = Topic.get($stateParams);

}
