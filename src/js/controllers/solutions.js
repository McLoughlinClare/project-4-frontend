angular
  .module('physicsWars')
  .controller('SolutionsShowCtrl', SolutionsShowCtrl)
  .controller('SolutionsEditCtrl', SolutionsEditCtrl);




SolutionsShowCtrl.$inject = ['Solution', 'Topic', 'Student', '$stateParams', '$state', '$auth'];
function SolutionsShowCtrl(Solution, Topic, Student, $stateParams, $state, $auth) {
  const vm = this;

  vm.all = Solution.query();
  vm.solution = Solution.get($stateParams);


  if ($auth.getPayload()) vm.currentStudent = Student.get({ id: $auth.getPayload().id });


  function solutionsDelete() {
    vm.solution
      .$remove()
      .then(() => $state.go('solutionsIndex'));
  }

  vm.delete = solutionsDelete;

  function solutionsUpdate() {
    Solution
      .update({ id: vm.solution.id }, vm.solution);
  }
}


SolutionsEditCtrl.$inject = ['Solution', 'Student', '$stateParams', '$state'];
function SolutionsEditCtrl(Solution, Student, $stateParams, $state) {
  const vm = this;

  Solution.get($stateParams).$promise.then((solution) => {
    vm.solution = solution;
  });

  vm.users = Student.query();

  function solutionsUpdate() {
    solution.correct = nil;
    Solution
      .update({ id: vm.solution.id }, vm.solution)
      .$promise
      .then(() => $state.go('solutionsShow', { id: vm.solution.id }));
  }

  vm.update = solutionsUpdate;
}
